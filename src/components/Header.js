import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Header.css';
import helloWeb3Icon from '../assests/Hello Web3 Icon.png';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [imageError, setImageError] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout, isLoggedIn } = useUser();

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  // Reset image error when user changes
  useEffect(() => {
    setImageError(false);
    if (user?.avatar) {
      console.log('User profile picture loaded in header');
    }
  }, [user?.avatar]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Left - Logo/Icon */}
        <div className="header-left">
          <img 
            src={helloWeb3Icon} 
            alt="Hello Web3" 
            className="header-logo"
          />
        </div>

        {/* Right - Profile Icon with Popover */}
        <div className="header-right">
          <div className="profile-container" ref={profileRef}>
            <button 
              className="profile-button"
              onClick={toggleProfileMenu}
              aria-label="Profile menu"
            >
              {user && user.avatar && !imageError ? (
                <img 
                  src={user.avatar} 
                  alt={user.name || 'User'}
                  className="profile-image"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={() => {
                    console.warn('Profile image failed to load, using fallback icon');
                    setImageError(true);
                  }}
                  onLoad={() => setImageError(false)}
                />
              ) : (
                <svg 
                  className="profile-icon" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              )}
            </button>
            
            {showProfileMenu && (
              <div className="profile-popover">
                <div className="popover-arrow"></div>
                <ul className="profile-menu">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <button className="menu-item" onClick={() => {
                          navigate('/profile');
                          setShowProfileMenu(false);
                        }}>
                          <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          Profile
                        </button>
                      </li>
                      <li>
                        <button className="menu-item">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                          </svg>
                          Settings
                        </button>
                      </li>
                      <li>
                        <button className="menu-item">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Terms & Conditions
                        </button>
                      </li>
                      <li>
                        <button className="menu-item">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Help
                        </button>
                      </li>
                      <li>
                        <button className="menu-item" onClick={() => {
                          logout();
                          setShowProfileMenu(false);
                        }}>
                          <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                          </svg>
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <button className="menu-item" onClick={() => navigate('/login')}>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                        </svg>
                        Log in / Sign up
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 