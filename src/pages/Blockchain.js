import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branch.css';

const Blockchain = () => {
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
        <h1 className="branch-title">Blockchain Technology</h1>
        
        {/* Introduction Section */}
        <section className="branch-section">
          <h2 className="section-title">What is Blockchain?</h2>
          <div className="content-card">
            <h3>The Foundation of Web3</h3>
            <p>
              Blockchain is a revolutionary technology that serves as the backbone of Web3 
              and cryptocurrency ecosystems. At its core, a blockchain is a distributed, 
              decentralized digital ledger that records transactions across a network of 
              computers in a way that is secure, transparent, and immutable.
            </p>
            <p>
              Think of blockchain as a digital spreadsheet that is duplicated thousands of 
              times across a network of computers. This network is designed to regularly 
              update this spreadsheet, ensuring that all copies are identical and that no 
              single entity can control or manipulate the data.
            </p>
            <p>
              The name "blockchain" comes from the way data is structured: information is 
              grouped into blocks, which are then linked together in a chronological chain. 
              Each block contains a set of transactions and is cryptographically connected 
              to the previous block, creating an unbreakable chain of data.
            </p>
          </div>
        </section>

        {/* How Blockchain Works Section */}
        <section className="branch-section">
          <h2 className="section-title">How Blockchain Works</h2>
          <div className="content-card">
            <h3>The Technical Process</h3>
            <p>
              Understanding how blockchain works requires grasping several key concepts 
              that work together to create a secure and decentralized system.
            </p>
            
            <h4>1. Transaction Initiation</h4>
            <p>
              When a user wants to make a transaction (like sending cryptocurrency), they 
              create a digital message containing the transaction details. This message is 
              signed with their private key to prove ownership and prevent tampering.
            </p>

            <h4>2. Network Propagation</h4>
            <p>
              The signed transaction is broadcast to the entire network of computers (nodes) 
              that maintain copies of the blockchain. Each node receives the transaction 
              and adds it to their local pool of pending transactions.
            </p>

            <h4>3. Block Creation</h4>
            <p>
              Miners or validators (depending on the consensus mechanism) collect pending 
              transactions and group them into a new block. This block also contains a 
              reference to the previous block (creating the chain) and a unique identifier 
              called a hash.
            </p>

            <h4>4. Consensus and Validation</h4>
            <p>
              The network must agree on which block to add next. This is achieved through 
              consensus mechanisms like Proof of Work (PoW) or Proof of Stake (PoS). 
              Once consensus is reached, the block is added to the chain.
            </p>

            <h4>5. Chain Update</h4>
            <p>
              The new block is distributed to all nodes in the network, and each node 
              updates their local copy of the blockchain. The transaction is now confirmed 
              and becomes part of the permanent record.
            </p>
          </div>
        </section>

        {/* Key Components Section */}
        <section className="branch-section">
          <h2 className="section-title">Key Components of Blockchain</h2>
          <div className="content-card">
            <h3>The Building Blocks</h3>
            <p>
              Blockchain technology consists of several fundamental components that work 
              together to create a secure and decentralized system.
            </p>
            
            <h4>Blocks</h4>
            <p>
              Blocks are the containers that hold transaction data. Each block contains:
            </p>
            <ul>
              <li><strong>Block Header:</strong> Metadata including timestamp, previous block hash, and nonce</li>
              <li><strong>Transaction Data:</strong> The actual transaction information</li>
              <li><strong>Block Hash:</strong> A unique identifier created by hashing the block's contents</li>
            </ul>

            <h4>Cryptographic Hashing</h4>
            <p>
              Hash functions convert data of any size into a fixed-length string of characters. 
              This creates a digital fingerprint that is unique to the data and cannot be 
              reversed to reveal the original information.
            </p>

            <h4>Digital Signatures</h4>
            <p>
              Digital signatures use public-key cryptography to prove ownership and prevent 
              forgery. Each user has a private key (kept secret) and a public key (shared 
              with others) that work together to create and verify signatures.
            </p>

            <h4>Consensus Mechanisms</h4>
            <p>
              Consensus mechanisms ensure that all nodes in the network agree on the state 
              of the blockchain. Common mechanisms include:
            </p>
            <ul>
              <li><strong>Proof of Work (PoW):</strong> Miners solve complex mathematical puzzles</li>
              <li><strong>Proof of Stake (PoS):</strong> Validators stake tokens to participate in consensus</li>
              <li><strong>Delegated Proof of Stake (DPoS):</strong> Token holders vote for validators</li>
              <li><strong>Proof of Authority (PoA):</strong> Pre-approved validators maintain the network</li>
            </ul>

            <h4>Distributed Ledger</h4>
            <p>
              The blockchain is maintained across multiple nodes, each with a complete copy 
              of the ledger. This redundancy ensures that no single point of failure can 
              compromise the network's integrity.
            </p>
          </div>
        </section>

        {/* Types of Blockchains Section */}
        <section className="branch-section">
          <h2 className="section-title">Types of Blockchains</h2>
          <div className="content-card">
            <h3>Public, Private, and Consortium</h3>
            <p>
              Blockchains can be categorized based on their accessibility and control 
              mechanisms, each serving different use cases and requirements.
            </p>
            
            <h4>Public Blockchains</h4>
            <p>
              Public blockchains are open to anyone who wants to participate. They are 
              completely decentralized and transparent, with no central authority controlling 
              the network.
            </p>
            <ul>
              <li><strong>Examples:</strong> Bitcoin, Ethereum, Solana</li>
              <li><strong>Access:</strong> Anyone can read, write, and participate</li>
              <li><strong>Security:</strong> High security through decentralization</li>
              <li><strong>Speed:</strong> Generally slower due to consensus requirements</li>
              <li><strong>Use Cases:</strong> Cryptocurrencies, DeFi, NFTs</li>
            </ul>

            <h4>Private Blockchains</h4>
            <p>
              Private blockchains are controlled by a single organization or entity. 
              Access is restricted to authorized participants, and the network is typically 
              faster and more efficient.
            </p>
            <ul>
              <li><strong>Examples:</strong> Hyperledger Fabric, Corda</li>
              <li><strong>Access:</strong> Restricted to authorized participants</li>
              <li><strong>Security:</strong> Controlled by the organization</li>
              <li><strong>Speed:</strong> Faster due to fewer participants</li>
              <li><strong>Use Cases:</strong> Enterprise applications, supply chain management</li>
            </ul>

            <h4>Consortium Blockchains</h4>
            <p>
              Consortium blockchains are controlled by a group of organizations rather than 
              a single entity. They offer a middle ground between public and private 
              blockchains.
            </p>
            <ul>
              <li><strong>Examples:</strong> R3 Corda, Quorum</li>
              <li><strong>Access:</strong> Controlled by a group of organizations</li>
              <li><strong>Security:</strong> Shared among consortium members</li>
              <li><strong>Speed:</strong> Moderate, depending on consensus mechanism</li>
              <li><strong>Use Cases:</strong> Banking consortia, industry collaborations</li>
            </ul>
          </div>
        </section>

        {/* Consensus Mechanisms Section */}
        <section className="branch-section">
          <h2 className="section-title">Consensus Mechanisms</h2>
          <div className="content-card">
            <h3>How Networks Reach Agreement</h3>
            <p>
              Consensus mechanisms are the protocols that ensure all nodes in a blockchain 
              network agree on the current state of the ledger. Different mechanisms offer 
              various trade-offs between security, decentralization, and efficiency.
            </p>
            
            <h4>Proof of Work (PoW)</h4>
            <p>
              PoW was the first consensus mechanism, introduced by Bitcoin. Miners compete 
              to solve complex mathematical puzzles, and the first to solve it gets to add 
              the next block and receive rewards.
            </p>
            <ul>
              <li><strong>Pros:</strong> High security, proven track record</li>
              <li><strong>Cons:</strong> High energy consumption, slow transaction processing</li>
              <li><strong>Examples:</strong> Bitcoin, Litecoin, Dogecoin</li>
            </ul>

            <h4>Proof of Stake (PoS)</h4>
            <p>
              PoS validators are chosen to create new blocks based on the amount of tokens 
              they have staked (locked up) as collateral. This reduces energy consumption 
              and increases transaction speed.
            </p>
            <ul>
              <li><strong>Pros:</strong> Energy efficient, faster transactions, better scalability</li>
              <li><strong>Cons:</strong> Potential for centralization, less proven security</li>
              <li><strong>Examples:</strong> Ethereum (post-Merge), Cardano, Polkadot</li>
            </ul>

            <h4>Delegated Proof of Stake (DPoS)</h4>
            <p>
              DPoS is a variation of PoS where token holders vote for delegates who are 
              responsible for validating transactions and maintaining the network.
            </p>
            <ul>
              <li><strong>Pros:</strong> Very fast transactions, high throughput</li>
              <li><strong>Cons:</strong> More centralized, potential for collusion</li>
              <li><strong>Examples:</strong> EOS, Tron, Steem</li>
            </ul>

            <h4>Proof of Authority (PoA)</h4>
            <p>
              PoA relies on a set of pre-approved validators who are known and trusted 
              entities. This mechanism is commonly used in private and consortium blockchains.
            </p>
            <ul>
              <li><strong>Pros:</strong> Very fast, energy efficient, suitable for enterprise</li>
              <li><strong>Cons:</strong> Centralized, requires trust in validators</li>
              <li><strong>Examples:</strong> VeChain, POA Network</li>
            </ul>
          </div>
        </section>

        {/* Blockchain Applications Section */}
        <section className="branch-section">
          <h2 className="section-title">Blockchain Applications</h2>
          <div className="content-card">
            <h3>Beyond Cryptocurrency</h3>
            <p>
              While blockchain is most commonly associated with cryptocurrencies, its 
              applications extend far beyond digital money. The technology's unique 
              properties make it suitable for various industries and use cases.
            </p>
            
            <h4>Financial Services</h4>
            <ul>
              <li><strong>Cross-border Payments:</strong> Faster and cheaper international transfers</li>
              <li><strong>Trade Finance:</strong> Automated letter of credit and trade document processing</li>
              <li><strong>Asset Tokenization:</strong> Converting real-world assets into digital tokens</li>
              <li><strong>Decentralized Finance (DeFi):</strong> Peer-to-peer financial services</li>
            </ul>

            <h4>Supply Chain Management</h4>
            <ul>
              <li><strong>Product Traceability:</strong> Tracking goods from origin to consumer</li>
              <li><strong>Quality Assurance:</strong> Verifying product authenticity and standards</li>
              <li><strong>Inventory Management:</strong> Real-time tracking of goods in transit</li>
              <li><strong>Compliance:</strong> Automated regulatory reporting and certification</li>
            </ul>

            <h4>Healthcare</h4>
            <ul>
              <li><strong>Medical Records:</strong> Secure, patient-controlled health data</li>
              <li><strong>Drug Traceability:</strong> Preventing counterfeit medications</li>
              <li><strong>Clinical Trials:</strong> Transparent and immutable trial data</li>
              <li><strong>Insurance Claims:</strong> Automated and transparent claim processing</li>
            </ul>

            <h4>Government and Public Services</h4>
            <ul>
              <li><strong>Voting Systems:</strong> Secure and transparent elections</li>
              <li><strong>Identity Management:</strong> Self-sovereign digital identities</li>
              <li><strong>Land Registry:</strong> Immutable property records</li>
              <li><strong>Tax Collection:</strong> Automated and transparent tax systems</li>
            </ul>

            <h4>Entertainment and Media</h4>
            <ul>
              <li><strong>NFTs:</strong> Digital ownership of art, music, and collectibles</li>
              <li><strong>Gaming:</strong> True ownership of in-game assets</li>
              <li><strong>Content Monetization:</strong> Direct creator-to-fan payments</li>
              <li><strong>Royalty Distribution:</strong> Automated royalty payments to creators</li>
            </ul>
          </div>
        </section>

        {/* Challenges and Limitations Section */}
        <section className="branch-section">
          <h2 className="section-title">Challenges and Limitations</h2>
          <div className="content-card">
            <h3>Current Obstacles</h3>
            <p>
              While blockchain technology offers tremendous potential, it also faces 
              significant challenges that need to be addressed for widespread adoption.
            </p>
            
            <h4>Scalability Issues</h4>
            <p>
              Most blockchain networks struggle to process high volumes of transactions 
              quickly and efficiently. This creates bottlenecks and high fees during 
              periods of high demand.
            </p>

            <h4>Energy Consumption</h4>
            <p>
              Proof of Work consensus mechanisms require massive amounts of computational 
              power, leading to significant energy consumption and environmental concerns.
            </p>

            <h4>User Experience</h4>
            <p>
              Blockchain applications often have complex user interfaces and require 
              technical knowledge, creating barriers to mainstream adoption.
            </p>

            <h4>Regulatory Uncertainty</h4>
            <p>
              Unclear and evolving regulations create uncertainty for businesses and 
              developers building blockchain applications.
            </p>

            <h4>Interoperability</h4>
            <p>
              Different blockchain networks often cannot communicate with each other, 
              limiting the potential for cross-chain applications and data sharing.
            </p>
          </div>
        </section>

        {/* Future of Blockchain Section */}
        <section className="branch-section">
          <h2 className="section-title">The Future of Blockchain</h2>
          <div className="content-card">
            <h3>Emerging Trends and Developments</h3>
            <p>
              Blockchain technology continues to evolve rapidly, with new developments 
              addressing current limitations and opening up new possibilities.
            </p>
            
            <h4>Layer 2 Solutions</h4>
            <p>
              Layer 2 solutions like Lightning Network (Bitcoin) and Polygon (Ethereum) 
              build on top of existing blockchains to provide faster and cheaper transactions 
              while maintaining security.
            </p>

            <h4>Cross-Chain Interoperability</h4>
            <p>
              Projects like Polkadot, Cosmos, and various bridges are working to enable 
              seamless communication between different blockchain networks.
            </p>

            <h4>Zero-Knowledge Proofs</h4>
            <p>
              ZK-proofs enable privacy-preserving transactions while maintaining transparency 
              and security, opening up new use cases for blockchain technology.
            </p>

            <h4>Central Bank Digital Currencies (CBDCs)</h4>
            <p>
              Governments worldwide are exploring blockchain-based digital versions of 
              their national currencies, potentially bridging traditional finance and 
              blockchain technology.
            </p>

            <blockquote>
              "Blockchain technology is still in its early stages, but its potential 
              to transform industries and create new economic models is becoming 
              increasingly clear."
            </blockquote>

            <p>
              As blockchain technology matures and these challenges are addressed, we can 
              expect to see broader adoption across industries and the emergence of new 
              applications that we haven't even imagined yet. The future of blockchain 
              is not just about technology—it's about creating a more transparent, 
              efficient, and equitable world.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blockchain;
