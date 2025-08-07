import React from 'react';
import EditableBranchTemplate from '../components/EditableBranchTemplate';
import { hackathonData } from '../data/hackathonData';

const Hackathon = () => {
  const handleSave = (updatedContent) => {
    console.log('Saving updated content:', updatedContent);
    alert('Content saved successfully! (Check console for details)');
  };

  return (
    <EditableBranchTemplate
      title="Web3 Hackathons"
      sections={hackathonData}
      onSave={handleSave}
      editorAddress="0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
    />
  );
};

export default Hackathon;
