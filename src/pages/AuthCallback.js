import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import ZkLoginService from '../services/zkLoginService';
import './AuthCallback.css';

const AuthCallback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();
  
  const zkLoginService = new ZkLoginService();

  useEffect(() => {
    handleAuthCallback();
  }, []);

  const handleAuthCallback = async () => {
    try {
      console.log('Processing OAuth callback...');
      setCurrentStep('processing_callback');

      // Google OAuth returns tokens in URL fragment, not query params
      const hashParams = new URLSearchParams(location.hash.substring(1));
      const idToken = hashParams.get('id_token');
      const error = hashParams.get('error');
      
      console.log('Processing OAuth callback, ID token:', idToken ? 'received' : 'missing');

      if (error) {
        throw new Error(`OAuth error: ${error}`);
      }

      if (!idToken) {
        throw new Error('No ID token received from Google OAuth');
      }

      setCurrentStep('processing_jwt');
      const decodedJwt = await zkLoginService.processJWT(idToken);
      
      console.log('JWT processed successfully, profile picture:', !!decodedJwt.picture);

      setCurrentStep('getting_salt');
      const userSalt = await zkLoginService.getUserSalt(idToken);

      setCurrentStep('getting_zk_proof');
      const zkProof = await zkLoginService.getZkProof(idToken, userSalt);

      setCurrentStep('computing_address');
      const zkLoginAddress = zkLoginService.computeZkLoginAddress(decodedJwt, userSalt);

      setCurrentStep('completing_login');

      // Fetch and process Google profile picture
      let avatarUrl = decodedJwt.picture;
      console.log('Raw avatar URL from Google:', avatarUrl);
      
      if (avatarUrl) {
        // Clean and optimize the avatar URL for better reliability
        try {
          // Remove existing size parameters and add our own
          const baseUrl = avatarUrl.split('=')[0];
          avatarUrl = baseUrl + '=s200-c'; // 200px square, cropped
          console.log('Processed avatar URL:', avatarUrl);
          
          // Test if the avatar URL is accessible
          const testImage = new Image();
          testImage.onload = () => {
            console.log('✅ Avatar successfully loaded from:', avatarUrl);
          };
          testImage.onerror = () => {
            console.warn('❌ Avatar failed to load from:', avatarUrl);
          };
          testImage.src = avatarUrl;
          
        } catch (error) {
          console.error('Error processing avatar URL:', error);
          avatarUrl = decodedJwt.picture; // Fallback to original URL
        }
      } else {
        console.log('No avatar URL provided in JWT');
      }

      const userData = {
        id: decodedJwt.sub,
        name: decodedJwt.name || 'Google User',
        email: decodedJwt.email,
        avatar: avatarUrl,
        loginMethod: 'google',
        walletAddress: zkLoginAddress,
        zkLoginData: {
          address: zkLoginAddress,
          salt: userSalt,
          proof: zkProof
        }
      };

      login(userData);
      console.log('zkLogin completed successfully!');
      navigate('/', { replace: true });

    } catch (err) {
      console.error('Auth callback failed:', err);
      setError('Authentication failed: ' + err.message);
      setLoading(false);
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 'processing_callback': return 'Processing OAuth callback...';
      case 'processing_jwt': return 'Processing JWT token...';
      case 'getting_salt': return 'Getting user salt...';
      case 'getting_zk_proof': return 'Generating zero-knowledge proof...';
      case 'computing_address': return 'Computing zkLogin address...';
      case 'completing_login': return 'Completing login...';
      default: return 'Processing...';
    }
  };

  if (error) {
    return (
      <div className="auth-callback">
        <div className="callback-container">
          <div className="error-section">
            <h2>Authentication Failed</h2>
            <p className="error-message">{error}</p>
            <button 
              className="retry-button"
              onClick={() => navigate('/login')}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-callback">
      <div className="callback-container">
        <div className="loading-section">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <h2>Completing zkLogin</h2>
          <p>{getStepDescription()}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;