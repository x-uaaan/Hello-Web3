import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';

const treeData = {
  label: 'Hello Web3',
  children: [
    { label: 'What is Web3?', path: '/what-is-web3' },
    { label: 'Community', path: '/community' },
    { label: 'Blockchain', path: '/blockchain' },
    { label: 'Cryptocurrency', path: '/cryptocurrency' },
    { label: 'Industry', path: '/industry' },
    { label: 'Technology', path: '/technology' },
    { label: 'Hackathon', path: '/hackathon' },
    { label: 'Career', path: '/career' },
    { label: 'Development', path: '/development' },
  ],
};

function renderTree(node, navigate) {
  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <li className="tree-node">
      <div 
        className={`tree-label ${node.path ? 'clickable' : ''}`}
        onClick={() => handleClick(node.path)}
      >
        {node.label}
      </div>
      {node.children && (
        <ul className="tree-children">
          {node.children.map((child, idx) => (
            <React.Fragment key={child.label + idx}>
              {renderTree(child, navigate)}
            </React.Fragment>
          ))}
        </ul>
      )}
    </li>
  );
}

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <div className="main-container">
        <div className="tree-map-container">
          <ul className="tree-root">
            {renderTree(treeData, navigate)}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent; 