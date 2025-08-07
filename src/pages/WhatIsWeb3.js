import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branch.css';

const WhatIsWeb3 = () => {
  const navigate = useNavigate();

  return (
    <div className="branch-page">
      <button 
        className="back-button" 
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </button>
      <div className="branch-container">
        <h1 className="branch-title">What is Web3?</h1>
        
        {/* Introduction Section */}
        <section className="branch-section">
          <h2 className="section-title">The Evolution of the Web</h2>
          <div className="content-card">
            <h3>From Web1 to Web3: A Journey of Transformation</h3>
            <p>
              The internet has evolved dramatically over the past three decades, transforming 
              from a simple information-sharing platform to a complex ecosystem that shapes 
              every aspect of our digital lives. Understanding this evolution is crucial to 
              grasping what Web3 represents and why it matters.
            </p>
            <p>
              Web3 represents the next phase in this evolution, promising to fundamentally 
              change how we interact with the internet, own digital assets, and participate 
              in online communities. It's not just a technological upgrade—it's a paradigm 
              shift that challenges the very foundations of how the digital world operates.
            </p>
          </div>
        </section>

        {/* Web1 Section */}
        <section className="branch-section">
          <h2 className="section-title">Web1: The Read-Only Web (1990s-2000s)</h2>
          <div className="content-card">
            <h3>The Static Internet</h3>
            <p>
              Web1, also known as the "Static Web" or "Read-Only Web," was the internet's 
              first iteration. During this period, the web was primarily a one-way 
              communication medium where users could consume information but had limited 
              ability to contribute or interact.
            </p>
            <p>
              Key characteristics of Web1:
            </p>
            <ul>
              <li><strong>Static Content:</strong> Websites were primarily HTML pages with text and basic images</li>
              <li><strong>Limited Interactivity:</strong> Users could read content but couldn't easily contribute</li>
              <li><strong>Centralized Control:</strong> Content was controlled by website owners and webmasters</li>
              <li><strong>Basic Functionality:</strong> Simple forms, basic search, and minimal user-generated content</li>
              <li><strong>Slow Connections:</strong> Dial-up internet limited multimedia content</li>
            </ul>
            <p>
              Web1 was revolutionary for its time, making information accessible globally 
              and establishing the foundation for digital communication. However, it was 
              limited by its static nature and lack of user participation.
            </p>
          </div>
        </section>

        {/* Web2 Section */}
        <section className="branch-section">
          <h2 className="section-title">Web2: The Social Web (2000s-2020s)</h2>
          <div className="content-card">
            <h3>The Interactive Internet</h3>
            <p>
              Web2, often called the "Social Web" or "Read-Write Web," transformed the 
              internet into an interactive platform where users could not only consume 
              content but also create, share, and collaborate. This era gave birth to 
              social media, cloud computing, and mobile applications.
            </p>
            <p>
              Key features of Web2:
            </p>
            <ul>
              <li><strong>User-Generated Content:</strong> Social media platforms, blogs, and forums</li>
              <li><strong>Interactive Applications:</strong> Dynamic websites with rich user experiences</li>
              <li><strong>Mobile Revolution:</strong> Smartphones and mobile apps transformed access</li>
              <li><strong>Cloud Computing:</strong> Centralized data storage and processing</li>
              <li><strong>Social Networking:</strong> Facebook, Twitter, Instagram, and other platforms</li>
              <li><strong>E-commerce Boom:</strong> Online shopping and digital marketplaces</li>
            </ul>
            <p>
              While Web2 brought unprecedented connectivity and user engagement, it also 
              created new challenges around data privacy, platform monopolies, and user 
              control over personal information.
            </p>
            <blockquote>
              "Web2 gave us the ability to connect and share, but it also created 
              walled gardens where a few companies control our data and digital lives."
            </blockquote>
          </div>
        </section>

        {/* Web3 Section */}
        <section className="branch-section">
          <h2 className="section-title">Web3: The Decentralized Web (2020s-Present)</h2>
          <div className="content-card">
            <h3>The Future of the Internet</h3>
            <p>
              Web3 represents a fundamental shift toward a more democratic, user-controlled 
              internet. Built on blockchain technology and decentralized protocols, Web3 
              aims to give users true ownership of their data, digital assets, and online 
              identities.
            </p>
            <p>
              Core principles of Web3:
            </p>
            <ul>
              <li><strong>Decentralization:</strong> No single entity controls the network or user data</li>
              <li><strong>User Ownership:</strong> Users own their data, digital assets, and online identities</li>
              <li><strong>Trustless Interactions:</strong> Direct peer-to-peer transactions without intermediaries</li>
              <li><strong>Transparency:</strong> Open-source protocols and verifiable transactions</li>
              <li><strong>Interoperability:</strong> Seamless interaction between different platforms and protocols</li>
              <li><strong>Permissionless Innovation:</strong> Anyone can build and deploy applications</li>
            </ul>
            <p>
              Web3 is not just about technology—it's about reimagining the relationship 
              between users and the digital services they use, creating a more equitable 
              and user-centric internet.
            </p>
          </div>
        </section>

        {/* Key Technologies Section */}
        <section className="branch-section">
          <h2 className="section-title">Key Web3 Technologies</h2>
          <div className="content-card">
            <h3>The Building Blocks of Web3</h3>
            <p>
              Web3 is powered by several key technologies that work together to create 
              a decentralized, user-controlled internet experience.
            </p>
            
            <h4>Blockchain Technology</h4>
            <p>
              Blockchain serves as the foundation of Web3, providing a secure, transparent, 
              and immutable ledger for recording transactions and data. It enables trust 
              without requiring centralized authorities.
            </p>

            <h4>Cryptocurrencies</h4>
            <p>
              Digital currencies like Bitcoin and Ethereum provide the economic layer of 
              Web3, enabling value transfer, incentivizing network participation, and 
              powering decentralized applications.
            </p>

            <h4>Smart Contracts</h4>
            <p>
              Self-executing contracts with predefined rules enable automated transactions 
              and complex applications without intermediaries. They form the backbone of 
              decentralized applications (DApps).
            </p>

            <h4>Decentralized Storage</h4>
            <p>
              Technologies like IPFS (InterPlanetary File System) and Filecoin provide 
              distributed storage solutions that are resistant to censorship and single 
              points of failure.
            </p>

            <h4>Digital Wallets</h4>
            <p>
              Web3 wallets like MetaMask and WalletConnect serve as user interfaces for 
              interacting with blockchain networks, managing digital assets, and accessing 
              decentralized applications.
            </p>

            <h4>Decentralized Identity (DID)</h4>
            <p>
              Self-sovereign identity systems allow users to control their digital 
              identities without relying on centralized authorities or platforms.
            </p>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="branch-section">
          <h2 className="section-title">Web3 Use Cases</h2>
          <div className="content-card">
            <h3>Real-World Applications</h3>
            <p>
              Web3 is already being applied across various industries and use cases, 
              demonstrating its potential to transform how we interact with digital services.
            </p>
            
            <h4>Decentralized Finance (DeFi)</h4>
            <p>
              DeFi applications provide financial services like lending, borrowing, trading, 
              and insurance without traditional intermediaries, making financial services 
              more accessible and transparent.
            </p>

            <h4>Non-Fungible Tokens (NFTs)</h4>
            <p>
              NFTs enable true ownership of digital assets, from art and music to virtual 
              real estate and gaming items, creating new economic models for creators.
            </p>

            <h4>Decentralized Autonomous Organizations (DAOs)</h4>
            <p>
              DAOs are community-governed organizations that operate transparently and 
              democratically, enabling new forms of collaboration and decision-making.
            </p>

            <h4>Decentralized Social Media</h4>
            <p>
              Web3 social platforms give users control over their data and content, 
              eliminating the need for centralized platforms that monetize user information.
            </p>

            <h4>Supply Chain Management</h4>
            <p>
              Blockchain-based supply chain solutions provide transparency and traceability, 
              helping verify product authenticity and ethical sourcing.
            </p>

            <h4>Gaming and Virtual Worlds</h4>
            <p>
              Web3 gaming enables true ownership of in-game assets and cross-platform 
              interoperability, creating new gaming economies and experiences.
            </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="branch-section">
          <h2 className="section-title">Challenges and Considerations</h2>
          <div className="content-card">
            <h3>Navigating the Web3 Landscape</h3>
            <p>
              While Web3 offers tremendous potential, it also faces significant challenges 
              that need to be addressed for widespread adoption.
            </p>
            
            <h4>Technical Challenges</h4>
            <ul>
              <li><strong>Scalability:</strong> Current blockchain networks struggle with high transaction volumes</li>
              <li><strong>User Experience:</strong> Complex interfaces and technical barriers for mainstream users</li>
              <li><strong>Interoperability:</strong> Different blockchains and protocols need to work together seamlessly</li>
              <li><strong>Security:</strong> Smart contract vulnerabilities and user error risks</li>
            </ul>

            <h4>Regulatory Challenges</h4>
            <ul>
              <li><strong>Legal Uncertainty:</strong> Unclear regulations around cryptocurrencies and DeFi</li>
              <li><strong>Compliance:</strong> Balancing decentralization with regulatory requirements</li>
              <li><strong>Taxation:</strong> Complex tax implications for crypto transactions</li>
              <li><strong>Cross-border Issues:</strong> Different regulatory approaches across countries</li>
            </ul>

            <h4>Adoption Challenges</h4>
            <ul>
              <li><strong>Education:</strong> Need for better understanding of Web3 concepts</li>
              <li><strong>Infrastructure:</strong> Limited developer tools and resources</li>
              <li><strong>Network Effects:</strong> Overcoming established Web2 platform advantages</li>
              <li><strong>Environmental Impact:</strong> Energy consumption concerns for proof-of-work networks</li>
            </ul>
          </div>
        </section>

        {/* Future Outlook Section */}
        <section className="branch-section">
          <h2 className="section-title">The Future of Web3</h2>
          <div className="content-card">
            <h3>What Lies Ahead</h3>
            <p>
              Web3 is still in its early stages, but the potential for transformation 
              is enormous. As the technology matures and adoption grows, we can expect 
              significant changes in how we interact with the digital world.
            </p>
            
            <h4>Mass Adoption</h4>
            <p>
              As user interfaces improve and regulatory clarity emerges, Web3 applications 
              will become more accessible to mainstream users, driving widespread adoption 
              across various industries.
            </p>

            <h4>Institutional Integration</h4>
            <p>
              Traditional institutions are increasingly exploring Web3 technologies, from 
              banks offering crypto services to companies tokenizing real-world assets.
            </p>

            <h4>New Economic Models</h4>
            <p>
              Web3 enables new economic models like tokenization, fractional ownership, 
              and community-driven governance that could reshape traditional business models.
            </p>

            <h4>Enhanced Privacy and Security</h4>
            <p>
              Advances in zero-knowledge proofs and privacy-preserving technologies will 
              enable secure, private transactions while maintaining transparency where needed.
            </p>

            <blockquote>
              "Web3 represents a fundamental reimagining of the internet—one where users 
              are not just consumers but owners and participants in the digital economy."
            </blockquote>

            <p>
              The journey to Web3 is ongoing, and while challenges remain, the potential 
              for a more democratic, user-controlled internet is driving innovation and 
              adoption across the globe. The future of the web is being written by 
              developers, entrepreneurs, and users who believe in the power of 
              decentralization and user sovereignty.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIsWeb3;
