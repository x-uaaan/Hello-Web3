import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branch.css';

const Cryptocurrency = () => {
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
        <h1 className="branch-title">Cryptocurrency</h1>
        
        {/* Bitcoin Section */}
        <section className="branch-section">
          <h2 className="section-title">Bitcoin (BTC)</h2>
          <div className="content-card">
            <h3>The First Cryptocurrency</h3>
            <p>
              Bitcoin, created by the pseudonymous Satoshi Nakamoto in 2009, is the world's first 
              and most well-known cryptocurrency. It was designed as a peer-to-peer electronic cash 
              system that operates without the need for a central authority or intermediaries. Bitcoin 
              introduced the revolutionary concept of blockchain technology, which has since inspired 
              thousands of other cryptocurrencies.
            </p>
            <p>
              Bitcoin operates on a decentralized network where transactions are verified by a 
              distributed network of computers (nodes) through a process called mining. The total 
              supply of Bitcoin is capped at 21 million coins, making it a deflationary asset. 
              This scarcity, combined with its decentralized nature, has led many to view Bitcoin 
              as "digital gold" and a potential store of value.
            </p>
            <p>
              Key features of Bitcoin include:
            </p>
            <ul>
              <li><strong>Decentralization:</strong> No single entity controls the network</li>
              <li><strong>Limited Supply:</strong> Maximum of 21 million BTC will ever exist</li>
              <li><strong>Security:</strong> Protected by cryptographic algorithms and proof-of-work consensus</li>
              <li><strong>Transparency:</strong> All transactions are publicly recorded on the blockchain</li>
              <li><strong>Borderless:</strong> Can be sent anywhere in the world without restrictions</li>
            </ul>
          </div>
        </section>

        {/* Ethereum Section */}
        <section className="branch-section">
          <h2 className="section-title">Ethereum (ETH)</h2>
          <div className="content-card">
            <h3>The World Computer</h3>
            <p>
              Ethereum, launched in 2015 by Vitalik Buterin, is more than just a cryptocurrency. 
              It's a decentralized platform that enables developers to build and deploy smart contracts 
              and decentralized applications (DApps). While Bitcoin focuses on being a digital currency, 
              Ethereum aims to be a global computing platform.
            </p>
            <p>
              Ethereum's native cryptocurrency, Ether (ETH), serves multiple purposes:
            </p>
            <ul>
              <li><strong>Gas Fees:</strong> Used to pay for transaction processing and smart contract execution</li>
              <li><strong>Staking:</strong> ETH holders can stake their tokens to help secure the network</li>
              <li><strong>Store of Value:</strong> Like Bitcoin, ETH can be held as an investment</li>
              <li><strong>Governance:</strong> ETH holders can participate in network governance decisions</li>
            </ul>
            <p>
              Ethereum's transition from Proof-of-Work (PoW) to Proof-of-Stake (PoS) in 2022, 
              known as "The Merge," significantly reduced its energy consumption and made the network 
              more environmentally friendly. This upgrade also introduced staking rewards for ETH holders 
              who participate in network validation.
            </p>
          </div>
        </section>

        {/* Solana Section */}
        <section className="branch-section">
          <h2 className="section-title">Solana (SOL)</h2>
          <div className="content-card">
            <h3>High-Performance Blockchain</h3>
            <p>
              Solana is a high-performance blockchain platform designed to provide fast, secure, 
              and scalable decentralized applications and marketplaces. Launched in 2020, Solana 
              has gained significant attention for its ability to process up to 65,000 transactions 
              per second, making it one of the fastest blockchains in existence.
            </p>
            <p>
              Key innovations that make Solana unique:
            </p>
            <ul>
              <li><strong>Proof of History (PoH):</strong> A cryptographic clock that creates a historical record proving that an event occurred before another event</li>
              <li><strong>Proof of Stake (PoS):</strong> Validators stake SOL to participate in consensus</li>
              <li><strong>Tower BFT:</strong> A modified version of Practical Byzantine Fault Tolerance</li>
              <li><strong>Turbine:</strong> A block propagation protocol</li>
              <li><strong>Gulf Stream:</strong> Mempool-less transaction forwarding protocol</li>
              <li><strong>Sealevel:</strong> Parallel smart contracts runtime</li>
              <li><strong>Pipelining:</strong> Transaction processing optimization</li>
            </ul>
            <p>
              Solana's ecosystem has grown rapidly, attracting developers and projects in DeFi, 
              NFTs, gaming, and other Web3 applications. The platform's low transaction fees 
              (often less than $0.01) make it particularly attractive for microtransactions and 
              high-frequency trading applications.
            </p>
          </div>
        </section>

        {/* Sui Section */}
        <section className="branch-section">
          <h2 className="section-title">Sui (SUI)</h2>
          <div className="content-card">
            <h3>Next-Generation Layer 1</h3>
            <p>
              Sui is a layer-1 blockchain designed and built from the ground up to be the most 
              scalable, secure, and accessible platform for Web3. Developed by Mysten Labs and 
              launched in 2023, Sui represents the next evolution in blockchain technology, 
              focusing on speed, security, and developer experience.
            </p>
            <p>
              Sui's innovative features include:
            </p>
            <ul>
              <li><strong>Object-Centric Model:</strong> Unlike account-based models, Sui uses an object-centric approach where everything is an object</li>
              <li><strong>Parallel Execution:</strong> Can process multiple transactions simultaneously, dramatically increasing throughput</li>
              <li><strong>Move Programming Language:</strong> A safe and secure language designed specifically for blockchain applications</li>
              <li><strong>Horizontal Scalability:</strong> Performance scales with the number of validators</li>
              <li><strong>Sub-second Finality:</strong> Transactions are finalized in under one second</li>
            </ul>
            <p>
              Sui's architecture is particularly well-suited for gaming, DeFi, and social 
              applications that require high throughput and low latency. The platform's object-centric 
              model makes it easier for developers to create complex applications with rich on-chain 
              data structures.
            </p>
          </div>
        </section>

        {/* Stablecoins Section */}
        <section className="branch-section">
          <h2 className="section-title">Stablecoins</h2>
          <div className="content-card">
            <h3>Price-Stable Digital Assets</h3>
            <p>
              Stablecoins are cryptocurrencies designed to maintain a stable value relative to 
              a specific asset, typically a fiat currency like the US Dollar. They provide the 
              benefits of cryptocurrencies (fast transfers, borderless transactions) while 
              minimizing the volatility that often characterizes crypto markets.
            </p>
            <p>
              Major types of stablecoins:
            </p>
            <ul>
              <li><strong>Fiat-Collateralized:</strong> Backed by reserves of fiat currency (e.g., USDC, USDT, BUSD)</li>
              <li><strong>Crypto-Collateralized:</strong> Backed by other cryptocurrencies (e.g., DAI, sUSD)</li>
              <li><strong>Algorithmic:</strong> Use algorithms to maintain price stability (e.g., FRAX, UST)</li>
              <li><strong>Commodity-Collateralized:</strong> Backed by physical assets like gold (e.g., PAXG)</li>
            </ul>
            <p>
              Popular stablecoins include:
            </p>
            <ul>
              <li><strong>USDT (Tether):</strong> The largest stablecoin by market cap, widely used in trading</li>
              <li><strong>USDC (USD Coin):</strong> Known for transparency and regulatory compliance</li>
              <li><strong>DAI:</strong> Decentralized stablecoin backed by crypto collateral</li>
              <li><strong>BUSD:</strong> Binance USD, backed by the Binance exchange</li>
            </ul>
            <p>
              Stablecoins play a crucial role in the crypto ecosystem by providing liquidity, 
              enabling trading pairs, and serving as a bridge between traditional finance and 
              decentralized finance (DeFi).
            </p>
          </div>
        </section>

        {/* Other Popular Cryptocurrencies Section */}
        <section className="branch-section">
          <h2 className="section-title">Other Popular Cryptocurrencies</h2>
          <div className="content-card">
            <h3>Diverse Crypto Ecosystem</h3>
            <p>
              Beyond the major cryptocurrencies, there are thousands of other digital assets 
              serving various purposes in the Web3 ecosystem. Here are some notable examples:
            </p>
            
            <h4>Cardano (ADA)</h4>
            <p>
              A proof-of-stake blockchain platform that aims to provide a more secure and 
              sustainable infrastructure for the development of decentralized applications. 
              Known for its academic approach and peer-reviewed research.
            </p>

            <h4>Polkadot (DOT)</h4>
            <p>
              A multi-chain network that enables different blockchains to transfer messages 
              and value in a trust-free fashion. Designed to support various interconnected, 
              application-specific sub-chains called parachains.
            </p>

            <h4>Polygon (MATIC)</h4>
            <p>
              A layer-2 scaling solution for Ethereum that provides faster and cheaper 
              transactions. It helps Ethereum scale by processing transactions on a separate 
              blockchain while maintaining security through periodic checkpoints.
            </p>

            <h4>Avalanche (AVAX)</h4>
            <p>
              A platform for launching decentralized applications and enterprise blockchain 
              deployments in one interoperable, highly scalable ecosystem. Known for its 
              sub-second transaction finality.
            </p>

            <h4>Chainlink (LINK)</h4>
            <p>
              A decentralized oracle network that enables smart contracts to securely connect 
              to external data sources, APIs, and payment systems. Essential for bringing 
              real-world data to blockchain applications.
            </p>

            <h4>Uniswap (UNI)</h4>
            <p>
              The governance token for Uniswap, one of the largest decentralized exchanges 
              (DEX) on Ethereum. UNI holders can participate in protocol governance and 
              earn rewards from trading fees.
            </p>
          </div>
        </section>

        {/* Investment Considerations Section */}
        <section className="branch-section">
          <h2 className="section-title">Investment Considerations</h2>
          <div className="content-card">
            <h3>Understanding Crypto Investments</h3>
            <p>
              Cryptocurrency investing requires careful consideration of various factors:
            </p>
            <ul>
              <li><strong>Volatility:</strong> Crypto markets are highly volatile and can experience significant price swings</li>
              <li><strong>Regulation:</strong> Regulatory environment varies by country and is constantly evolving</li>
              <li><strong>Technology Risk:</strong> New technologies may face technical challenges or security vulnerabilities</li>
              <li><strong>Market Adoption:</strong> Success depends on widespread adoption and real-world use cases</li>
              <li><strong>Diversification:</strong> Consider spreading investments across different cryptocurrencies and asset classes</li>
            </ul>
            <blockquote>
              "Cryptocurrency investing is not for the faint of heart. It requires thorough 
              research, risk management, and a long-term perspective. Never invest more than 
              you can afford to lose."
            </blockquote>
            <p>
              Before investing in any cryptocurrency, it's essential to:
            </p>
            <ul>
              <li>Research the project's technology, team, and use cases</li>
              <li>Understand the tokenomics and supply mechanisms</li>
              <li>Consider the competitive landscape and market position</li>
              <li>Evaluate the regulatory environment and compliance</li>
              <li>Assess your risk tolerance and investment goals</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cryptocurrency;
