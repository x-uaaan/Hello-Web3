import React, { useState, useRef } from 'react';
import {Divider} from '@heroui/react';
import './EditableBranchTemplate.css';
import { useWallet } from '@suiet/wallet-kit';
import { Transaction } from '@mysten/sui/transactions';
import { PACKAGE_ID, MODULE_NAME, FUNCTION_NAME } from '../services/suiConfig';
import { sha256 } from 'js-sha256';

const EditableBranchTemplate = ({ title, sections, onSave, editorAddress = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(sections);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState({ sectionIndex: null, contentIndex: null });

  const toolbarRef = useRef(null);
  const wallet = useWallet();
  const [isSaveOpen, setIsSaveOpen] = useState(false);



  // Handle toolbar formatting
  const formatText = (command) => {
    // Allow global undo/redo even without a focused element
    if (command === 'undo' || command === 'redo') {
      document.execCommand(command, false, null);
      return;
    }
    if (selectedElement) {
      document.execCommand(command, false, null);
    }
  };

  // Handle content editing
  const handleContentChange = (sectionIndex, contentIndex, newContent) => {
    const newSections = [...content];
    newSections[sectionIndex].content[contentIndex] = newContent;
    setContent(newSections);
  };

  // Handle section title editing
  const handleSectionTitleChange = (sectionIndex, newTitle) => {
    const newSections = content.map((section, idx) =>
      idx === sectionIndex ? { ...section, title: newTitle } : section
    );
    setContent(newSections);
  };

  // Delete an entire section (allowed for newly added sections)
  const handleDeleteSection = (sectionIndex) => {
    const newSections = content.filter((_, idx) => idx !== sectionIndex);
    setContent(newSections);
    const newIndex = Math.max(0, sectionIndex - 1);
    setSelectedPosition({ sectionIndex: newSections.length ? newIndex : null, contentIndex: null });
  };

  // Delete a block at section/content index
  const handleDeleteItem = (sectionIndex, contentIndex) => {
    const newSections = content.map((section, idx) => {
      if (idx !== sectionIndex) return section;
      const newSectionContent = section.content.filter((_, i) => i !== contentIndex);
      return { ...section, content: newSectionContent };
    });
    setContent(newSections);

    // Reset selection to previous block if possible
    const previousIndex = contentIndex - 1;
    if (previousIndex >= 0) {
      setSelectedPosition({ sectionIndex, contentIndex: previousIndex });
    } else {
      setSelectedPosition({ sectionIndex, contentIndex: null });
    }
  };

  // Insert new block after the currently focused block
  const insertItem = (type) => {
    // Special case: inserting a "card" is interpreted as inserting a new section-level content-card
    if (type === 'card') {
      const newSection = {
        title: 'New Section',
        content: [{ type: 'paragraph', text: 'New content' }],
        isNew: true,
      };

      // If there are no sections yet, create one
      if (!content || content.length === 0) {
        setContent([newSection]);
        setSelectedPosition({ sectionIndex: 0, contentIndex: 0 });
        return;
      }

      const currentSectionIndex =
        selectedPosition.sectionIndex !== null && selectedPosition.sectionIndex !== undefined
          ? selectedPosition.sectionIndex
          : content.length - 1;

      const insertSectionIndex = currentSectionIndex + 1;
      const newSectionsAtLevel = [
        ...content.slice(0, insertSectionIndex),
        newSection,
        ...content.slice(insertSectionIndex),
      ];
      setContent(newSectionsAtLevel);
      setSelectedPosition({ sectionIndex: insertSectionIndex, contentIndex: 0 });
      return;
    }

    // For non-card inserts, add a block within the current section
    let newItem = null;
    switch (type) {
      case 'paragraph':
        newItem = { type: 'paragraph', text: 'New paragraph' };
        break;
      case 'bulletedList':
        newItem = { type: 'list', items: ['New item'] };
        break;
      case 'numberedList':
        newItem = { type: 'orderedList', items: ['New item'] };
        break;
      default:
        return;
    }

    // If no sections exist, create one with the new item
    if (!content || content.length === 0) {
      setContent([{ title: 'New Section', content: [newItem] }]);
      setSelectedPosition({ sectionIndex: 0, contentIndex: 0 });
      return;
    }

    const targetSectionIndex =
      selectedPosition.sectionIndex !== null && selectedPosition.sectionIndex !== undefined
        ? selectedPosition.sectionIndex
        : 0;
    const targetSection = content[targetSectionIndex];
    const insertIndex =
      selectedPosition.contentIndex !== null && selectedPosition.contentIndex !== undefined
        ? selectedPosition.contentIndex + 1
        : targetSection.content.length;

    const newSections = content.map((section, idx) => {
      if (idx !== targetSectionIndex) return section;
      const newSectionContent = [
        ...section.content.slice(0, insertIndex),
        newItem,
        ...section.content.slice(insertIndex),
      ];
      return { ...section, content: newSectionContent };
    });

    setContent(newSections);
    setSelectedPosition({ sectionIndex: targetSectionIndex, contentIndex: insertIndex });
  };

  // Submit on-chain record of the edit action
  const recordEditOnChain = async (pageTitle, contentObject) => {
    try {
      if (!wallet?.connected) {
        console.warn('Wallet not connected; skipping on-chain record.');
        return null;
      }

      const tx = new Transaction();
      const target = `${PACKAGE_ID}::${MODULE_NAME}::${FUNCTION_NAME}`;
      const nowMs = Date.now();
      const contentJson = JSON.stringify(contentObject ?? {});
      const hashBytes = sha256.array(contentJson);

      tx.moveCall({
        target,
        arguments: [
          tx.pure.string(pageTitle),
          tx.pure.vector('u8', hashBytes),
          tx.pure.u64(nowMs),
        ],
      });

      // Try modern API first
      if (typeof wallet.signAndExecuteTransaction === 'function') {
        return await wallet.signAndExecuteTransaction({ transaction: tx });
      }
      // Fallback to older API
      if (typeof wallet.signAndExecuteTransactionBlock === 'function') {
        return await wallet.signAndExecuteTransactionBlock({ transactionBlock: tx });
      }
      console.warn('No compatible signAndExecute method on wallet.');
      return null;
    } catch (error) {
      console.error('Failed to record edit on-chain:', error);
      return null;
    }
  };

  // Handle save
  const handleSave = async () => {
    // Clear transient flags like isNew before saving
    const sanitized = content.map((section) => {
      const { isNew, ...rest } = section;
      return rest;
    });
    if (onSave) {
      onSave(sanitized);
    }
    // Fire-and-forget the on-chain record; do not block UI
    // Await here so errors can be surfaced in console, but not gated for state updates
    await recordEditOnChain(title, sanitized);
    setContent(sanitized);
    setIsEditing(false);
  };

  // Handle cancel
  const handleCancel = () => {
    setContent(sections);
    setIsEditing(false);
  };

  return (
    <div className="branch-page">
      <div className="branch-layout">
        {/* Content List Sidebar */}
        <div className="content-sidebar">
          <div className="content-header">
            <h3>{title}</h3>
            {/* Edit Button */}
            {!isEditing && (
              <button className="edit-button" onClick={() => setIsEditing(true)}> Edit </button>
            )}
          </div>
          <ul className="content-list">
            {content.map((section, index) => (
              <li key={index}>
                <a href={`#section-${index}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="branch-container">
          <h1 className="branch-title">{title}</h1>

          {/* Content Sections */}
          {content.map((section, sectionIndex) => (
            <section key={sectionIndex} className="branch-section" id={`section-${sectionIndex}`}>
              <div className="section-title-row">
                <h2
                  className={`section-title ${isEditing ? 'editable-heading' : ''}`}
                  contentEditable={isEditing}
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleSectionTitleChange(sectionIndex, e.target.textContent)}
                  onFocus={(e) => {
                    setSelectedElement(e.target);
                    setSelectedPosition({ sectionIndex, contentIndex: null });
                  }}
                >
                  {section.title}
                </h2>
                {isEditing && (
                  <button
                    className="delete-section-button"
                    onClick={() => handleDeleteSection(sectionIndex)}
                    title="Delete this new section"
                    aria-label="Delete section"
                  >
                    Delete Section
                  </button>
                )}
              </div>
              <div className="content-card">
                {section.content.map((item, contentIndex) => (
                  <div key={contentIndex} className="content-item">
                    {isEditing && item.type !== 'heading' && (
                      <button
                        className="delete-item-button"
                        onClick={() => handleDeleteItem(sectionIndex, contentIndex)}
                        title="Delete block"
                        aria-label="Delete block"
                      >
                        ×
                      </button>
                    )}
                    {item.type === 'heading' && (
                      <h3 
                        className={isEditing ? 'editable-heading' : ''}
                        contentEditable={isEditing}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => handleContentChange(sectionIndex, contentIndex, {
                          ...item,
                          text: e.target.textContent
                        })}
                        onFocus={(e) => {
                          setSelectedElement(e.target);
                          setSelectedPosition({ sectionIndex, contentIndex });
                        }}
                      >
                        {item.text}
                      </h3>
                    )}
                    
                    {item.type === 'paragraph' && (
                      <p 
                        className={isEditing ? 'editable-paragraph' : ''}
                        contentEditable={isEditing}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => handleContentChange(sectionIndex, contentIndex, {
                          ...item,
                          text: e.target.textContent
                        })}
                        onFocus={(e) => {
                          setSelectedElement(e.target);
                          setSelectedPosition({ sectionIndex, contentIndex });
                        }}
                      >
                        {item.text}
                      </p>
                    )}
                    
                    {item.type === 'list' && (
                      <ul className={isEditing ? 'editable-list' : ''}>
                        {item.items.map((listItem, listIndex) => (
                          <li 
                            key={listIndex}
                            contentEditable={isEditing}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => {
                              const newItems = [...item.items];
                              newItems[listIndex] = e.target.textContent;
                              handleContentChange(sectionIndex, contentIndex, {
                                ...item,
                                items: newItems
                              });
                            }}
                            onFocus={(e) => {
                              setSelectedElement(e.target);
                              setSelectedPosition({ sectionIndex, contentIndex });
                            }}
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.type === 'orderedList' && (
                      <ol className={isEditing ? 'editable-list' : ''}>
                        {item.items.map((listItem, listIndex) => (
                          <li
                            key={listIndex}
                            contentEditable={isEditing}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => {
                              const newItems = [...item.items];
                              newItems[listIndex] = e.target.textContent;
                              handleContentChange(sectionIndex, contentIndex, {
                                ...item,
                                items: newItems,
                              });
                            }}
                            onFocus={(e) => {
                              setSelectedElement(e.target);
                              setSelectedPosition({ sectionIndex, contentIndex });
                            }}
                          >
                            {listItem}
                          </li>
                        ))}
                      </ol>
                    )}

                    {item.type === 'card' && (
                      <div className="card-item">
                        <h4
                          className={isEditing ? 'editable-heading' : ''}
                          contentEditable={isEditing}
                          suppressContentEditableWarning={true}
                          onBlur={(e) => handleContentChange(sectionIndex, contentIndex, {
                            ...item,
                            title: e.target.textContent,
                          })}
                          onFocus={(e) => {
                            setSelectedElement(e.target);
                            setSelectedPosition({ sectionIndex, contentIndex });
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={isEditing ? 'editable-paragraph' : ''}
                          contentEditable={isEditing}
                          suppressContentEditableWarning={true}
                          onBlur={(e) => handleContentChange(sectionIndex, contentIndex, {
                            ...item,
                            text: e.target.textContent,
                          })}
                          onFocus={(e) => {
                            setSelectedElement(e.target);
                            setSelectedPosition({ sectionIndex, contentIndex });
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Last Edited Timestamp */}
          <div className="last-edited">
            This page was last edited on {new Date().toLocaleDateString()}, at {new Date().toLocaleTimeString()} (UTC) by {editorAddress}.
          </div>
        </div>
      </div>

      {/* Floating Toolbar */}
      {isEditing && (
        <div 
          ref={toolbarRef}
          className="floating-toolbar"
          style={{
            left: '50%',
            top: '2rem',
            transform: 'translateX(-50%)'
          }}
        >
          <div className="toolbar-row">
            <button 
              className="toolbar-button"
              onClick={() => formatText('bold')}
              title="Bold"
            >
              <strong>Bold</strong>
            </button>
            <button 
              className="toolbar-button"
              onClick={() => formatText('insertUnorderedList')}
              title="Bullet List"
            >
              • List
            </button>
            <button 
              className="toolbar-button"
              onClick={() => formatText('insertOrderedList')}
              title="Number List"
            >
              1. List
            </button>
            <Divider orientation="vertical" className="toolbar-divider" />
            <button
              className="toolbar-button"
              onClick={() => insertItem('paragraph')}
              title="Insert Paragraph"
            >
              + Paragraph
            </button>
            <button
              className="toolbar-button"
              onClick={() => insertItem('bulletedList')}
              title="Insert Bullet List"
            >
              + Bullet List
            </button>
            <button
              className="toolbar-button"
              onClick={() => insertItem('numberedList')}
              title="Insert Number List"
            >
              + Number List
            </button>
            <button
              className="toolbar-button"
              onClick={() => insertItem('card')}
              title="Insert Card"
            >
              + Card
            </button>
            <Divider orientation="vertical" className="toolbar-divider" />
            <button 
              className="toolbar-button"
              onClick={() => formatText('undo')}
              title="Undo (Ctrl+Z)"
            >
              Undo
            </button>
            <button 
              className="toolbar-button"
              onClick={() => formatText('redo')}
              title="Redo (Ctrl+Y)"
            >
              Redo
            </button>
            <button 
              className="toolbar-button save-button"
              onClick={() => setIsSaveOpen(true)}
              title="Save Changes"
            >
              Save
            </button>
            <button 
              className="toolbar-button cancel-button"
              onClick={handleCancel}
              title="Cancel Changes"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* Custom Save Confirmation Modal (no external UI dependency) */}
      {isSaveOpen && (
        <div className="custom-modal-overlay" role="dialog" aria-modal="true">
          <div className="custom-modal">
            <div className="custom-modal-header">Confirm Payment</div>
            <div className="custom-modal-body">
              Proceed to Payment?
            </div>
            <div className="custom-modal-footer">
              <button className="toolbar-button" onClick={() => setIsSaveOpen(false)}>No</button>
              <button className="toolbar-button save-button" onClick={() => { setIsSaveOpen(false); setIsEditing(false); }}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableBranchTemplate;
