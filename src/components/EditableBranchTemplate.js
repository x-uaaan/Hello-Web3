import React, { useState, useRef } from 'react';
import './EditableBranchTemplate.css';

const EditableBranchTemplate = ({ title, sections, onSave, editorAddress = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6" }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(sections);
  const [selectedElement, setSelectedElement] = useState(null);

  const toolbarRef = useRef(null);



  // Handle toolbar formatting
  const formatText = (command) => {
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

  // Handle save
  const handleSave = () => {
    if (onSave) {
      onSave(content);
    }
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
            <li><a href="#references">References</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="branch-container">
          <h1 className="branch-title">{title}</h1>

          {/* Content Sections */}
          {content.map((section, sectionIndex) => (
            <section key={sectionIndex} className="branch-section" id={`section-${sectionIndex}`}>
              <h2 className="section-title">{section.title}</h2>
              <div className="content-card">
                {section.content.map((item, contentIndex) => (
                  <div key={contentIndex} className="content-item">
                    {item.type === 'heading' && (
                      <h3 
                        className={isEditing ? 'editable-heading' : ''}
                        contentEditable={isEditing}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => handleContentChange(sectionIndex, contentIndex, {
                          ...item,
                          text: e.target.textContent
                        })}
                        onFocus={(e) => setSelectedElement(e.target)}
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
                        onFocus={(e) => setSelectedElement(e.target)}
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
                            onFocus={(e) => setSelectedElement(e.target)}
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
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
          <button 
            className="toolbar-button save-button"
            onClick={handleSave}
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
      )}
    </div>
  );
};

export default EditableBranchTemplate;
