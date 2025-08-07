// Example usage of EditableBranchTemplate with different editor addresses

import EditableBranchTemplate from '../components/EditableBranchTemplate';
import { industryData } from './industryData';

// Example 1: With a specific editor address
const IndustryPageWithEditor = () => {
  const handleSave = (updatedContent) => {
    console.log('Saving updated content:', updatedContent);
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

// Example 2: With a different editor address
const IndustryPageWithDifferentEditor = () => {
  const handleSave = (updatedContent) => {
    console.log('Saving updated content:', updatedContent);
  };

  return (
    <EditableBranchTemplate
      title="Web3 Industry"
      sections={industryData}
      onSave={handleSave}
      editorAddress="0x1234567890abcdef1234567890abcdef12345678"
    />
  );
};

// Example 3: Without specifying editor address (uses default)
const IndustryPageWithDefaultEditor = () => {
  const handleSave = (updatedContent) => {
    console.log('Saving updated content:', updatedContent);
  };

  return (
    <EditableBranchTemplate
      title="Web3 Industry"
      sections={industryData}
      onSave={handleSave}
      // editorAddress will use the default value
    />
  );
};

export { IndustryPageWithEditor, IndustryPageWithDifferentEditor, IndustryPageWithDefaultEditor };
