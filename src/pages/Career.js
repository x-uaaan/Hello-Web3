import React from 'react';
import EditableBranchTemplate from '../components/EditableBranchTemplate';
import { careerData } from '../data/careerData';

const Career = () => {
  const handleSave = (updatedContent) => {
    console.log('Saving updated content:', updatedContent);
    alert('Content saved successfully! (Check console for details)');
  };

  return (
    <EditableBranchTemplate
      title="Web3 Careers"
      sections={careerData}
      onSave={handleSave}
      editorAddress="0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
    />
  );
};

export default Career;
