// Configuration for on-chain interactions
// Set REACT_APP_SUI_PACKAGE_ID in your environment to your published package ID

export const SUI_NETWORK = process.env.REACT_APP_SUI_NETWORK || 'testnet';
export const PACKAGE_ID = process.env.REACT_APP_SUI_PACKAGE_ID || '0xYOUR_PACKAGE_ID_HERE';
export const MODULE_NAME = process.env.REACT_APP_SUI_MODULE_NAME || 'contract';
export const FUNCTION_NAME = process.env.REACT_APP_SUI_FUNCTION_NAME || 'submit_metadata';


