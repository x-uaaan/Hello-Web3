import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import AuthCallback from './pages/AuthCallback';
import Profile from './pages/Profile';
import Industry from './pages/Industry';
import Cryptocurrency from './pages/Cryptocurrency';
import WhatIsWeb3 from './pages/WhatIsWeb3';
import Blockchain from './pages/Blockchain';
import Technology from './pages/Technology';
import Community from './pages/Community';
import Hackathon from './pages/Hackathon';
import Career from './pages/Career';
import Development from './pages/Development';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/cryptocurrency" element={<Cryptocurrency />} />
            <Route path="/what-is-web3" element={<WhatIsWeb3 />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/community" element={<Community />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/career" element={<Career />} />
            <Route path="/development" element={<Development />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
