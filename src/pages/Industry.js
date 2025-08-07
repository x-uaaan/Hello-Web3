import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branch.css';

const Industry = () => {
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
        <h1 className="branch-title">Web3 Industry</h1>
        
        {/* DeFi Section */}
        <section className="branch-section">
          <h2 className="section-title">Decentralized Finance (DeFi)</h2>
          <div className="content-card">
            <h3>Rethinking Money Without Banks</h3>
            <p>
              In the traditional financial world, banks and institutions play the role of middlemen. 
              They store your money, approve your loans, control interest rates, and take a cut of 
              almost every transaction. But what if there was a way to manage your finances without 
              needing a bank at all? That's exactly what DeFi — short for Decentralised Finance — 
              is all about. Powered by blockchain technology, DeFi opens the door for anyone with 
              an internet connection to access financial tools like saving, lending, trading, and 
              earning interest, all without the need for a central authority.
            </p>
            
            <p>
              At its core, DeFi replaces the role of banks with open-source software and smart 
              contracts — automated programs that follow exact instructions. These contracts live 
              on the blockchain and cannot be changed or manipulated by anyone once deployed. 
              Instead of asking a bank for a loan, you can use a DeFi app to borrow money directly 
              from other users. Rather than earning a small interest rate in a savings account, 
              you can lend your digital assets to others and earn more competitive returns. 
              Everything happens transparently, where the rules are clear, and every transaction 
              is recorded publicly.
            </p>
            
            <p>
              What makes DeFi so exciting is the level of accessibility it offers. Traditional 
              banks might ask for ID, income history, or even reject people based on where they 
              live. DeFi doesn't care about that. You simply connect your digital wallet — like 
              MetaMask — and you're in. There's no paperwork, no waiting period, and no closing 
              hours. Whether you're in a big city or a remote village, you have equal access to 
              the system. This has made DeFi especially popular in places with limited banking 
              access or where currency instability is a concern.
            </p>
            
            <p>
              Several DeFi platforms have already become household names in the Web3 space. 
              Uniswap is a decentralised exchange that allows users to instantly swap one type 
              of cryptocurrency for another without needing to create an account or go through 
              a third party. Aave and Compound are lending platforms where users can either 
              borrow crypto or lend it out to earn interest — all controlled by smart contracts. 
              These services run 24/7 and are often governed by the users themselves through 
              something called "governance tokens," which allow participants to vote on future 
              updates to the platform.
            </p>
            
            <p>
              But DeFi is more than just a money management tool. It's becoming an experimental 
              ground for rethinking how finance works altogether. People are building insurance 
              without insurance companies, prediction markets without betting platforms, and even 
              entire banks that operate purely online, owned and run by communities rather than 
              CEOs. The speed of innovation is rapid, and new ideas are being tested every day. 
              For example, there are DeFi projects that aim to bring real-world assets — like 
              stocks, real estate, or commodities — onto the blockchain so they can be traded 
              and managed just like cryptocurrencies.
            </p>
            
            <p>
              Of course, DeFi is still in its early stages. There are risks, such as technical 
              bugs, scams, and unpredictable market swings. Many platforms are still working to 
              improve security, simplify user experience, and comply with legal standards. But 
              despite these challenges, DeFi continues to grow and attract billions of dollars 
              in activity. It's no longer just for developers and crypto enthusiasts — more 
              people around the world are using it to send money, grow their savings, or 
              participate in financial systems that were once closed to them.
            </p>
            
            <p>
              Looking ahead, the future of DeFi points toward deeper integration with traditional 
              finance. We may soon see crypto credit cards powered by DeFi, or savings accounts 
              backed by stablecoins that offer better interest rates than banks. Governments and 
              financial institutions are also watching DeFi closely — some are adopting its ideas, 
              while others are exploring ways to regulate it. Either way, decentralised finance 
              is here to stay, and it's creating a world where money moves faster, smarter, and 
              more freely than ever before.
            </p>
          </div>
        </section>

        {/* DApps Section */}
        <section className="branch-section">
          <h2 className="section-title">Decentralized Applications (DApps)</h2>
          <div className="content-card">
            <h3>The Future of Applications</h3>
            <p>
              Decentralized Applications, or DApps, represent a fundamental shift in how we think 
              about software. Unlike traditional applications that run on centralized servers owned 
              by companies, DApps operate on blockchain networks, making them more transparent, 
              secure, and resistant to censorship.
            </p>
            <p>
              DApps are built using smart contracts and run on peer-to-peer networks rather than 
              centralized servers. This means no single entity controls the application, and users 
              have more control over their data and interactions. From social media platforms to 
              gaming applications, DApps are revolutionizing various industries by providing 
              decentralized alternatives to traditional services.
            </p>
          </div>
        </section>

        {/* DGame Section */}
        <section className="branch-section">
          <h2 className="section-title">Decentralized Gaming (DGame)</h2>
          <div className="content-card">
            <h3>Gaming on the Blockchain</h3>
            <p>
              Decentralized gaming is transforming the gaming industry by giving players true 
              ownership of their in-game assets. Through blockchain technology, players can own, 
              trade, and monetize their digital items across different games and platforms.
            </p>
            <p>
              Play-to-Earn (P2E) games have become particularly popular, where players can earn 
              cryptocurrency and NFTs by playing games. This creates new economic opportunities 
              and changes the traditional gaming model from pay-to-play to play-to-earn.
            </p>
          </div>
        </section>

        {/* DPin Section */}
        <section className="branch-section">
          <h2 className="section-title">Decentralized Pinning (DPin)</h2>
          <div className="content-card">
            <h3>Content Storage and Distribution</h3>
            <p>
              Decentralized pinning services provide distributed storage solutions for Web3 content. 
              These services ensure that important data, such as NFT metadata, IPFS content, and 
              other digital assets, remain accessible and persistent across the decentralized web.
            </p>
            <p>
              By using multiple nodes and redundancy, DPin services offer reliable storage solutions 
              that are resistant to single points of failure, ensuring the longevity and accessibility 
              of digital content in the Web3 ecosystem.
            </p>
          </div>
        </section>

        {/* NFT Section */}
        <section className="branch-section">
          <h2 className="section-title">Non-Fungible Tokens (NFTs)</h2>
          <div className="content-card">
            <h3>Digital Ownership and Collectibles</h3>
            <p>
              NFTs have revolutionized digital ownership by providing a way to prove authenticity 
              and ownership of digital assets on the blockchain. From digital art and music to 
              virtual real estate and collectibles, NFTs have created new opportunities for creators 
              and collectors alike.
            </p>
            <p>
              The NFT market has expanded beyond just digital art to include gaming assets, 
              virtual real estate, domain names, and even real-world assets tokenized on the 
              blockchain. This technology is creating new economic models and revenue streams 
              for creators and businesses.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industry; 
