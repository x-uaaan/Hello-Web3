import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branch.css';

const Career = () => {
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
        <h1 className="branch-title">Web3 Careers in Malaysia</h1>
        
        {/* Introduction Section */}
        <section className="branch-section">
          <h2 className="section-title">Building Your Web3 Career</h2>
          <div className="content-card">
            <h3>Opportunities in Malaysia's Growing Web3 Ecosystem</h3>
            <p>
              Malaysia's Web3 ecosystem is rapidly expanding, creating numerous 
              career opportunities for developers, entrepreneurs, and professionals 
              interested in blockchain technology. From established companies to 
              innovative startups, the Malaysian Web3 landscape offers diverse 
              career paths and growth opportunities.
            </p>
            <p>
              Whether you're a seasoned developer looking to transition into 
              blockchain development, a recent graduate exploring Web3 opportunities, 
              or an entrepreneur seeking to build in the decentralized space, 
              Malaysia's Web3 ecosystem provides a supportive environment for 
              career growth and innovation.
            </p>
            <blockquote>
              "The Web3 revolution is creating unprecedented opportunities for 
              Malaysian talent to build, innovate, and lead in the global 
              blockchain ecosystem."
            </blockquote>
          </div>
        </section>

        {/* Malaysia Web3 Companies Section */}
        <section className="branch-section">
          <h2 className="section-title">Malaysia Web3 Companies</h2>
          <div className="content-card">
            <h3>Leading Blockchain Companies in Malaysia</h3>
            <p>
              Malaysia is home to a growing number of Web3 companies, from 
              established fintech firms to innovative blockchain startups. 
              These companies offer diverse career opportunities across various 
              aspects of the blockchain ecosystem.
            </p>
            
            <h4>Established Fintech Companies</h4>
            <ul>
              <li><strong>Touch 'n Go Digital:</strong> Malaysia's leading digital payments company exploring blockchain solutions</li>
              <li><strong>Boost:</strong> Digital financial services platform with blockchain initiatives</li>
              <li><strong>Grab Financial Group:</strong> Southeast Asia's super app with fintech and blockchain projects</li>
              <li><strong>BigPay:</strong> Digital banking platform with blockchain technology integration</li>
            </ul>

            <h4>Blockchain Startups</h4>
            <ul>
              <li><strong>Luno Malaysia:</strong> Cryptocurrency exchange and digital asset platform</li>
              <li><strong>Tokenize Malaysia:</strong> Digital asset exchange and blockchain infrastructure</li>
              <li><strong>Pundi X:</strong> Blockchain-based point-of-sale solutions</li>
              <li><strong>CoinGecko Malaysia:</strong> Cryptocurrency data and analytics platform</li>
            </ul>

            <h4>Technology Companies</h4>
            <ul>
              <li><strong>MDEC (Malaysia Digital Economy Corporation):</strong> Government agency supporting digital innovation</li>
              <li><strong>Cyberview Living Lab:</strong> Technology hub supporting blockchain startups</li>
              <li><strong>MaGIC (Malaysia Global Innovation & Creativity Centre):</strong> Startup accelerator with blockchain focus</li>
              <li><strong>Sidec (Selangor Information Technology and Digital Economy Corporation):</strong> State-level tech support</li>
            </ul>

            <h4>Consulting and Services</h4>
            <ul>
              <li><strong>Blockchain Malaysia:</strong> Blockchain consulting and education services</li>
              <li><strong>Malaysia Blockchain Association:</strong> Industry group with member companies</li>
              <li><strong>Digital Nasional Berhad (DNB):</strong> National digital infrastructure with blockchain initiatives</li>
              <li><strong>Malaysian Technology Development Corporation (MTDC):</strong> Technology commercialization support</li>
            </ul>
          </div>
        </section>

        {/* Job Opportunities Section */}
        <section className="branch-section">
          <h2 className="section-title">Web3 Job Opportunities</h2>
          <div className="content-card">
            <h3>Career Paths in Malaysia's Web3 Ecosystem</h3>
            <p>
              The Web3 industry offers diverse career opportunities, from technical 
              roles in blockchain development to business positions in strategy and 
              operations. Malaysia's growing ecosystem provides various entry points 
              for professionals at different career stages.
            </p>
            
            <h4>Technical Roles</h4>
            <ul>
              <li><strong>Blockchain Developers:</strong> Smart contract development, DApp creation, protocol development</li>
              <li><strong>Full-Stack Developers:</strong> Frontend and backend development for Web3 applications</li>
              <li><strong>DevOps Engineers:</strong> Infrastructure management for blockchain networks</li>
              <li><strong>Security Specialists:</strong> Smart contract auditing, security testing, vulnerability assessment</li>
              <li><strong>Data Scientists:</strong> Blockchain analytics, DeFi data analysis, market research</li>
            </ul>

            <h4>Business and Operations Roles</h4>
            <ul>
              <li><strong>Product Managers:</strong> Web3 product strategy, roadmap development, user experience</li>
              <li><strong>Business Development:</strong> Partnership building, market expansion, ecosystem growth</li>
              <li><strong>Marketing Specialists:</strong> Community management, content creation, brand building</li>
              <li><strong>Legal and Compliance:</strong> Regulatory compliance, legal advisory, risk management</li>
              <li><strong>Finance and Accounting:</strong> Cryptocurrency accounting, treasury management, financial planning</li>
            </ul>

            <h4>Research and Education</h4>
            <ul>
              <li><strong>Blockchain Researchers:</strong> Academic research, protocol analysis, innovation development</li>
              <li><strong>Educators and Trainers:</strong> Blockchain education, workshop facilitation, curriculum development</li>
              <li><strong>Technical Writers:</strong> Documentation, tutorials, educational content creation</li>
              <li><strong>Community Managers:</strong> Developer relations, community building, event organization</li>
            </ul>

            <h4>Entrepreneurial Opportunities</h4>
            <ul>
              <li><strong>Startup Founders:</strong> Building new Web3 companies and projects</li>
              <li><strong>Freelance Consultants:</strong> Independent blockchain consulting and development</li>
              <li><strong>Content Creators:</strong> YouTube channels, blogs, podcasts about Web3</li>
              <li><strong>Event Organizers:</strong> Hackathons, conferences, meetups in the Web3 space</li>
            </ul>
          </div>
        </section>

        {/* Skills Development Section */}
        <section className="branch-section">
          <h2 className="section-title">Skills Development for Web3 Careers</h2>
          <div className="content-card">
            <h3>Essential Skills for Web3 Professionals</h3>
            <p>
              Building a successful career in Web3 requires a combination of 
              technical skills, business acumen, and industry knowledge. 
              Malaysian professionals can develop these skills through various 
              educational and practical opportunities.
            </p>
            
            <h4>Technical Skills</h4>
            <ul>
              <li><strong>Programming Languages:</strong> Solidity, Rust, JavaScript, Python, Go</li>
              <li><strong>Blockchain Platforms:</strong> Ethereum, Solana, Polygon, Binance Smart Chain</li>
              <li><strong>Development Tools:</strong> Hardhat, Truffle, Remix, MetaMask, Web3.js</li>
              <li><strong>DeFi Protocols:</strong> Understanding of lending, DEX, yield farming mechanisms</li>
              <li><strong>Smart Contract Security:</strong> Auditing, testing, vulnerability assessment</li>
            </ul>

            <h4>Business and Soft Skills</h4>
            <ul>
              <li><strong>Industry Knowledge:</strong> Understanding of blockchain use cases and market trends</li>
              <li><strong>Regulatory Awareness:</strong> Knowledge of cryptocurrency and blockchain regulations</li>
              <li><strong>Networking:</strong> Building relationships in the Web3 community</li>
              <li><strong>Problem Solving:</strong> Analytical thinking and innovative solution development</li>
              <li><strong>Communication:</strong> Explaining complex technical concepts to non-technical audiences</li>
            </ul>

            <h4>Learning Resources</h4>
            <ul>
              <li><strong>Online Courses:</strong> Coursera, Udemy, CryptoZombies, Buildspace</li>
              <li><strong>Documentation:</strong> Official blockchain platform documentation and tutorials</li>
              <li><strong>Community Learning:</strong> Local meetups, hackathons, workshops</li>
              <li><strong>University Programs:</strong> Blockchain courses at Malaysian universities</li>
              <li><strong>Industry Certifications:</strong> Professional blockchain and cryptocurrency certifications</li>
            </ul>
          </div>
        </section>

        {/* Career Growth Section */}
        <section className="branch-section">
          <h2 className="section-title">Career Growth and Advancement</h2>
          <div className="content-card">
            <h3>Building a Long-term Web3 Career</h3>
            <p>
              Web3 careers offer unique opportunities for rapid growth and 
              advancement, with the industry's fast-paced nature creating 
              numerous leadership and specialization opportunities.
            </p>
            
            <h4>Career Progression Paths</h4>
            <ul>
              <li><strong>Technical Track:</strong> Junior Developer → Senior Developer → Technical Lead → CTO</li>
              <li><strong>Product Track:</strong> Product Analyst → Product Manager → Senior PM → VP Product</li>
              <li><strong>Business Track:</strong> Business Analyst → Business Development → Director → VP</li>
              <li><strong>Research Track:</strong> Research Assistant → Researcher → Senior Researcher → Research Director</li>
            </ul>

            <h4>Specialization Opportunities</h4>
            <ul>
              <li><strong>DeFi Specialists:</strong> Deep expertise in decentralized finance protocols</li>
              <li><strong>NFT Experts:</strong> Specialization in non-fungible tokens and digital assets</li>
              <li><strong>Gaming Professionals:</strong> Focus on blockchain gaming and metaverse development</li>
              <li><strong>Security Auditors:</strong> Specialization in smart contract security and auditing</li>
              <li><strong>Regulatory Experts:</strong> Deep understanding of blockchain regulations and compliance</li>
            </ul>

            <h4>Leadership Development</h4>
            <ul>
              <li><strong>Team Leadership:</strong> Managing development teams and projects</li>
              <li><strong>Community Leadership:</strong> Leading local Web3 communities and organizations</li>
              <li><strong>Thought Leadership:</strong> Speaking at conferences, writing articles, sharing expertise</li>
              <li><strong>Entrepreneurial Leadership:</strong> Founding and leading Web3 startups</li>
            </ul>
          </div>
        </section>

        {/* Networking and Community Section */}
        <section className="branch-section">
          <h2 className="section-title">Networking and Community Building</h2>
          <div className="content-card">
            <h3>Building Your Web3 Network in Malaysia</h3>
            <p>
              Networking is crucial for career success in the Web3 industry. 
              Malaysia's growing blockchain community provides numerous 
              opportunities to connect with professionals, learn from experts, 
              and discover new career opportunities.
            </p>
            
            <h4>Local Communities and Events</h4>
            <ul>
              <li><strong>Malaysia Blockchain Association:</strong> Industry networking and events</li>
              <li><strong>Blockchain Malaysia Meetups:</strong> Regular community gatherings</li>
              <li><strong>University Blockchain Clubs:</strong> Student and alumni networking</li>
              <li><strong>Hackathons and Competitions:</strong> Networking through collaborative projects</li>
              <li><strong>Industry Conferences:</strong> Malaysia Digital Economy Conference, Fintech events</li>
            </ul>

            <h4>Online Communities</h4>
            <ul>
              <li><strong>Discord and Telegram Groups:</strong> Malaysian Web3 community channels</li>
              <li><strong>LinkedIn Groups:</strong> Professional blockchain networking</li>
              <li><strong>GitHub Communities:</strong> Open source collaboration and networking</li>
              <li><strong>Reddit and Forums:</strong> Global Web3 community participation</li>
            </ul>

            <h4>Professional Development</h4>
            <ul>
              <li><strong>Mentorship Programs:</strong> Connecting with experienced Web3 professionals</li>
              <li><strong>Industry Associations:</strong> Membership in professional blockchain organizations</li>
              <li><strong>Speaking Opportunities:</strong> Presenting at local and international events</li>
              <li><strong>Content Creation:</strong> Building personal brand through blogs and social media</li>
            </ul>
          </div>
        </section>

        {/* Salary and Compensation Section */}
        <section className="branch-section">
          <h2 className="section-title">Salary and Compensation in Web3</h2>
          <div className="content-card">
            <h3>Understanding Web3 Compensation in Malaysia</h3>
            <p>
              Web3 careers in Malaysia offer competitive compensation packages, 
              with salaries often higher than traditional tech roles due to 
              the specialized nature of blockchain technology and high demand 
              for skilled professionals.
            </p>
            
            <h4>Salary Ranges (Malaysia)</h4>
            <ul>
              <li><strong>Junior Blockchain Developer:</strong> RM 4,000 - RM 8,000 per month</li>
              <li><strong>Senior Blockchain Developer:</strong> RM 8,000 - RM 15,000 per month</li>
              <li><strong>Blockchain Architect:</strong> RM 12,000 - RM 25,000 per month</li>
              <li><strong>Product Manager (Web3):</strong> RM 6,000 - RM 12,000 per month</li>
              <li><strong>Business Development Manager:</strong> RM 5,000 - RM 10,000 per month</li>
            </ul>

            <h4>Compensation Components</h4>
            <ul>
              <li><strong>Base Salary:</strong> Competitive monthly salary</li>
              <li><strong>Performance Bonuses:</strong> Project-based and company performance bonuses</li>
              <li><strong>Token Incentives:</strong> Company tokens or cryptocurrency bonuses</li>
              <li><strong>Equity Options:</strong> Stock options in blockchain startups</li>
              <li><strong>Benefits:</strong> Health insurance, professional development, flexible work arrangements</li>
            </ul>

            <h4>Factors Affecting Compensation</h4>
            <ul>
              <li><strong>Experience Level:</strong> Years of experience in blockchain development</li>
              <li><strong>Technical Skills:</strong> Proficiency in specific blockchain platforms and tools</li>
              <li><strong>Company Size:</strong> Startup vs. established company compensation</li>
              <li><strong>Location:</strong> Kuala Lumpur vs. other Malaysian cities</li>
              <li><strong>Market Demand:</strong> Current demand for specific Web3 skills</li>
            </ul>
          </div>
        </section>

        {/* Future Outlook Section */}
        <section className="branch-section">
          <h2 className="section-title">Future Outlook for Web3 Careers</h2>
          <div className="content-card">
            <h3>Emerging Opportunities and Trends</h3>
            <p>
              The Web3 industry in Malaysia is poised for significant growth, 
              creating new career opportunities and evolving existing roles. 
              Understanding future trends helps professionals plan their career 
              development and stay competitive in the market.
            </p>
            
            <h4>Emerging Job Roles</h4>
            <ul>
              <li><strong>Metaverse Architects:</strong> Designing virtual worlds and experiences</li>
              <li><strong>DeFi Strategists:</strong> Optimizing yield farming and liquidity strategies</li>
              <li><strong>DAO Managers:</strong> Managing decentralized autonomous organizations</li>
              <li><strong>Blockchain Educators:</strong> Training and education specialists</li>
              <li><strong>Regulatory Specialists:</strong> Navigating blockchain regulations and compliance</li>
            </ul>

            <h4>Industry Growth Areas</h4>
            <ul>
              <li><strong>Central Bank Digital Currencies (CBDCs):</strong> Government blockchain initiatives</li>
              <li><strong>Enterprise Blockchain:</strong> Corporate blockchain adoption and solutions</li>
              <li><strong>Green Blockchain:</strong> Sustainable and energy-efficient blockchain solutions</li>
              <li><strong>Cross-Chain Solutions:</strong> Interoperability and multi-chain applications</li>
              <li><strong>AI and Blockchain Integration:</strong> Combining artificial intelligence with Web3</li>
            </ul>

            <h4>Malaysia's Strategic Position</h4>
            <ul>
              <li><strong>Digital Economy Focus:</strong> Government support for blockchain innovation</li>
              <li><strong>Southeast Asian Hub:</strong> Strategic location for regional blockchain development</li>
              <li><strong>Talent Development:</strong> Investment in blockchain education and training</li>
              <li><strong>Regulatory Clarity:</strong> Progressive blockchain regulations and policies</li>
            </ul>

            <blockquote>
              "Malaysia's Web3 ecosystem is at an exciting inflection point, 
              with unprecedented opportunities for professionals to build 
              meaningful careers in the blockchain revolution."
            </blockquote>

            <p>
              As Malaysia continues to embrace blockchain technology and digital 
              innovation, Web3 careers will become increasingly mainstream and 
              accessible. The combination of government support, growing industry 
              adoption, and local talent development creates a fertile environment 
              for long-term career success in the Web3 space.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
