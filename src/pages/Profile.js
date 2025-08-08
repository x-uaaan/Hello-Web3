import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import './Profile.css';

const Profile = () => {
  const { user, isLoggedIn, updateUser } = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  // Debug avatar status when profile loads
  useEffect(() => {
    if (user) {
      console.group('👤 Profile Avatar Status');
      console.log('User object:', user);
      console.log('Avatar URL:', user.avatar);
      console.log('Login method:', user.loginMethod);
      console.log('Has avatar:', !!user.avatar);
      if (user.avatar) {
        console.log('Avatar source: Google Profile Picture');
        console.log('Full URL:', user.avatar);
      }
      console.groupEnd();
    }
  }, [user]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const maskAddress = (data) => {
    if (!data) return 'Not available';
    if (isVisible) return data;
    return '••••••••••••••••••••••••••••••••••••••••••••';
  };

  if (!isLoggedIn || !user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-error">
            <h2>Access Denied</h2>
            <p>Please log in to view your profile.</p>
          </div>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      console.log('Copied to clipboard:', text);
    });
  };

  const startEdit = () => {
    setIsEditing(true);
    setEditName(user.name || '');
    setEditEmail(user.email || '');
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveEdit = () => {
    const trimmedName = (editName || '').trim();
    const trimmedEmail = (editEmail || '').trim();

    // Preserve wallet address fields; only update name/email
    updateUser({
      name: trimmedName || user.name,
      email: trimmedEmail || user.email,
    });
    setIsEditing(false);
  };



  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header - Avatar Left, Info Right */}
        <div className="profile-header">
          <div className="avatar-section">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name}
                className="profile-avatar"
                onLoad={() => {
                  console.log('✅ Profile avatar loaded successfully');
                }}
                onError={(e) => {
                  console.warn('❌ Profile avatar failed to load:', user.avatar);
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            ) : null}
            <div className="avatar-fallback" style={{ display: user.avatar ? 'none' : 'flex' }}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>

          <div className="profile-info">
            {isEditing ? (
              <>
                <input
                  className="edit-input"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Your name"
                />
                <input
                  className="edit-input"
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  placeholder="you@example.com"
                />
                <div className="edit-actions">
                  <button className="save-btn" onClick={saveEdit}>Save</button>
                  <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-email">{user.email}</p>
                <button className="edit-btn" onClick={startEdit}>Edit</button>
              </>
            )}
          </div>
        </div>
        


        {/* Profile Details */}
        <div className="profile-details">
          <div className="profile-item">
            <span className="label">Signed Method</span>
            <span className="value">{user.loginMethod === 'google' ? 'Google' : 'Wallet'}</span>
          </div>

          <div className="profile-item">
            <span className="label">{user.loginMethod === 'google' ? 'zkLogin Address' : 'Wallet Address'}</span>
            <div className="address-row">
              <span className="address-value" title={isVisible ? (user.loginMethod === 'google' ? user.zkLoginData?.address : user.walletAddress) : 'Click eye to view'}>
                {user.loginMethod === 'google' 
                  ? maskAddress(user.zkLoginData?.address)
                  : maskAddress(user.walletAddress)
                }
              </span>
              <div className="action-buttons">
                <button 
                  className="toggle-visibility-btn" 
                  onClick={toggleVisibility}
                  title={isVisible ? 'Hide address' : 'Show address'}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    {isVisible ? (
                      // Eye open icon
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    ) : (
                      // Eye closed icon
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                    )}
                  </svg>
                </button>
                {((user.loginMethod === 'google' && user.zkLoginData?.address) || (user.loginMethod !== 'google' && user.walletAddress)) && (
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard(user.loginMethod === 'google' ? user.zkLoginData.address : user.walletAddress)}
                    title="Copy address"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="profile-item">
            <span className="label">User ID</span>
            <div className="address-row">
              <span className="user-id" title={user.id}>{user.id}</span>
              <div className="action-buttons">
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard(user.id)}
                  title="Copy user ID"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
