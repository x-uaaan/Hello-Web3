import React from 'react';
import './MainContent.css';

const treeData = {
  label: 'Hello Web3',
  children: [
    { label: 'What is Web3?' },
    { label: 'Community' },
    { label: 'Blockchain' },
    { label: 'Cryptocurrency' },
    { label: 'Industry' },
    { label: 'Technology' },
    { label: 'Hackathon' },
    { label: 'Career' },
    { label: 'Development - Malaysia / Internasional' },
  ],
};

function renderTree(node) {
  return (
    <li className="tree-node">
      <div className="tree-label">{node.label}</div>
      {node.children && (
        <ul className="tree-children">
          {node.children.map((child, idx) => (
            <React.Fragment key={child.label + idx}>
              {renderTree(child)}
            </React.Fragment>
          ))}
        </ul>
      )}
    </li>
  );
}

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="main-container">
        <div className="tree-map-container">
          <ul className="tree-root">
            {renderTree(treeData)}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent; 