import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ZkLoginService from '../services/zkLoginService';
import './LoginPage.css';

const LoginPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();
  
  const zkLoginService = new ZkLoginService();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    setCurrentStep('initializing');
    
    try {
      console.log('Starting zkLogin with Google...');
      
      // Step 1: Generate ephemeral keypair and nonce
      setCurrentStep('generating_keypair');
      await zkLoginService.initializeZkLogin();
      
      // Step 2: Construct Google OAuth URL
      setCurrentStep('constructing_oauth_url');
      const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
      const redirectUri = 'http://localhost:3000/auth/callback';
      
      console.log('Using Client ID:', clientId?.substring(0, 20) + '...');
      console.log('Using Redirect URI:', redirectUri);
      
      if (!clientId) {
        throw new Error('Google Client ID not configured. Please set REACT_APP_GOOGLE_CLIENT_ID in your environment variables.');
      }
      
      const oauthUrl = zkLoginService.constructGoogleOAuthUrl(clientId, redirectUri);
      
      // Step 3: Redirect to Google OAuth
      setCurrentStep('redirecting_to_google');
      console.log('Redirecting to Google OAuth...');
      window.location.href = oauthUrl;
      
    } catch (err) {
      console.error('Google login failed:', err);
      setError('Google login failed: ' + err.message);
      setLoading(false);
      setCurrentStep('');
    }
  };

  const handleWalletLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate wallet connection
      setTimeout(() => {
        const userData = {
          id: 'wallet_' + Math.random().toString(36).substr(2, 9),
          name: 'Wallet User',
          email: null,
          avatar: null,
          loginMethod: 'wallet',
          walletAddress: '0x' + Math.random().toString(16).substr(2, 40)
        };
        
        login(userData);
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Wallet connection failed: ' + err.message);
      setLoading(false);
    }
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setError('');
  };

  const handleLogin = () => {
    if (selectedMethod === 'google') {
      handleGoogleLogin();
    } else if (selectedMethod === 'wallet') {
      handleWalletLogin();
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 'initializing': return 'Initializing zkLogin...';
      case 'generating_keypair': return 'Generating ephemeral keypair...';
      case 'constructing_oauth_url': return 'Constructing OAuth URL...';
      case 'redirecting_to_google': return 'Redirecting to Google...';
      default: return selectedMethod === 'google' ? 'Signing in with Google...' : 'Connecting wallet...';
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome to Hello Web3</h1>
          <p>Choose your preferred login method</p>
        </div>

        <div className="login-methods">
          <div 
            className={`login-method ${selectedMethod === 'google' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('google')}
          >
            <div className="method-icon google-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="method-content">
              <h3>Continue with Google</h3>
              <p>Sign in with your Google account using zkLogin</p>
            </div>
          </div>

          <div 
            className={`login-method ${selectedMethod === 'wallet' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('wallet')}
          >
            <div className="method-icon wallet-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h9zm-9-2h10V8H12v8z"/>
                <path d="M16 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div className="method-content">
              <h3>Connect Wallet</h3>
              <p>Connect your Web3 wallet</p>
            </div>
          </div>
        </div>

        {selectedMethod && (
          <div className="login-actions">
            <button 
              className="login-button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  {getStepDescription()}
                </div>
              ) : (
                `Continue with ${selectedMethod === 'google' ? 'Google' : 'Wallet'}`
              )}
            </button>
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="login-footer">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
