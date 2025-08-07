import React from 'react';
import EditableBranchTemplate from '../components/EditableBranchTemplate';
import { industryData } from '../data/industryData';

const Industry = () => {
  const handleSave = (updatedContent) => {
    // Here you would typically save the updated content to a database or localStorage
    console.log('Saving updated content:', updatedContent);
    // For now, we'll just log the changes
    alert('Content saved successfully! (Check console for details)');
  };

  return (
    <EditableBranchTemplate
      title="Web3 Industry"
      sections={industryData}
      onSave={handleSave}
      editorAddress="0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
    />
  );
};

export default Industry; 
