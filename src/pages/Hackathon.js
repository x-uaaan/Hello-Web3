import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Branch.css';

const Hackathon = () => {
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
        <h1 className="branch-title">Web3 Hackathons</h1>
        
        {/* Introduction Section */}
        <section className="branch-section">
          <h2 className="section-title">The Power of Web3 Hackathons</h2>
          <div className="content-card">
            <h3>Innovation Through Collaboration</h3>
            <p>
              Web3 hackathons are intensive, collaborative events where developers, 
              designers, entrepreneurs, and blockchain enthusiasts come together to 
              build innovative solutions in a short timeframe. These events serve as 
              catalysts for innovation, learning, and community building in the Web3 
              ecosystem.
            </p>
            <p>
              From local university competitions to global blockchain hackathons, 
              these events provide opportunities for participants to showcase their 
              skills, learn new technologies, network with industry professionals, 
              and potentially launch successful projects or startups.
            </p>
            <blockquote>
              "Hackathons are where ideas become reality, where learning happens 
              at lightning speed, and where the future of Web3 is built by passionate 
              developers and innovators."
            </blockquote>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="branch-section">
          <h2 className="section-title">Past Web3 Hackathons</h2>
          <div className="content-card">
            <h3>Notable Events and Achievements</h3>
            <p>
              Over the years, numerous Web3 hackathons have produced groundbreaking 
              projects and launched successful careers in blockchain development. 
              These events have shaped the landscape of decentralized applications 
              and continue to inspire new generations of developers.
            </p>
            
            <h4>Major Global Events</h4>
            <ul>
              <li><strong>ETHGlobal (2020-2023):</strong> Series of virtual and in-person Ethereum hackathons with thousands of participants worldwide</li>
              <li><strong>Solana Global Hackathon (2021-2023):</strong> Multi-million dollar prize pools attracting top developers globally</li>
              <li><strong>Polygon BuildIt (2022-2023):</strong> Layer-2 scaling hackathons with focus on DeFi and NFT projects</li>
              <li><strong>Chainlink Hackathon (2021-2023):</strong> Oracle and blockchain integration competitions</li>
              <li><strong>Filecoin Hackathon (2020-2022):</strong> Decentralized storage and Web3 infrastructure events</li>
            </ul>

            <h4>Notable Winning Projects</h4>
            <ul>
              <li><strong>DeFi Protocols:</strong> Lending platforms, DEX aggregators, yield farming tools</li>
              <li><strong>NFT Marketplaces:</strong> Digital art platforms, gaming marketplaces, collectible exchanges</li>
              <li><strong>Gaming Applications:</strong> Play-to-earn games, virtual worlds, blockchain-based gaming tools</li>
              <li><strong>Infrastructure Projects:</strong> Cross-chain bridges, developer tools, analytics platforms</li>
              <li><strong>Social Applications:</strong> Decentralized social media, community governance tools</li>
            </ul>

            <h4>Impact on the Ecosystem</h4>
            <ul>
              <li><strong>Startup Formation:</strong> Many hackathon projects evolved into successful companies</li>
              <li><strong>Talent Discovery:</strong> Companies recruit top developers from hackathon performances</li>
              <li><strong>Innovation Acceleration:</strong> Rapid prototyping and testing of new concepts</li>
              <li><strong>Community Building:</strong> Networking and collaboration opportunities</li>
              <li><strong>Education:</strong> Hands-on learning of cutting-edge Web3 technologies</li>
            </ul>
          </div>
        </section>

        {/* Malaysia Organizations Section */}
        <section className="branch-section">
          <h2 className="section-title">Malaysia Web3 Organizations</h2>
          <div className="content-card">
            <h3>Local Blockchain Communities</h3>
            <p>
              Malaysia has a growing Web3 ecosystem with several organizations 
              dedicated to promoting blockchain technology, organizing events, 
              and supporting local developers and entrepreneurs.
            </p>
            
            <h4>Professional Organizations</h4>
            <ul>
              <li><strong>Malaysia Blockchain Association:</strong> Industry group promoting blockchain adoption and regulation</li>
              <li><strong>Malaysia Digital Economy Corporation (MDEC):</strong> Government agency supporting digital innovation including blockchain</li>
              <li><strong>Malaysia Fintech Association:</strong> Financial technology organization with blockchain focus</li>
              <li><strong>Blockchain Malaysia:</strong> Community-driven organization for blockchain education and networking</li>
            </ul>

            <h4>Startup Incubators and Accelerators</h4>
            <ul>
              <li><strong>Malaysia Global Innovation & Creativity Centre (MaGIC):</strong> Government startup accelerator supporting blockchain projects</li>
              <li><strong>Cyberview Living Lab:</strong> Technology hub in Cyberjaya supporting blockchain startups</li>
              <li><strong>Selangor Information Technology and Digital Economy Corporation (Sidec):</strong> State-level support for tech startups</li>
              <li><strong>Malaysian Technology Development Corporation (MTDC):</strong> Technology commercialization support</li>
            </ul>

            <h4>Industry Groups</h4>
            <ul>
              <li><strong>Malaysia Digital Chamber of Commerce:</strong> Business organization promoting digital transformation</li>
              <li><strong>Malaysia Internet of Things Association:</strong> IoT and blockchain convergence initiatives</li>
              <li><strong>Malaysia Software Testing Board (MSTB):</strong> Quality assurance for blockchain applications</li>
            </ul>
          </div>
        </section>

        {/* University Clubs Section */}
        <section className="branch-section">
          <h2 className="section-title">Malaysia University Blockchain Clubs</h2>
          <div className="content-card">
            <h3>Student-Led Web3 Communities</h3>
            <p>
              Malaysian universities have active blockchain clubs and societies 
              that organize hackathons, workshops, and educational events. 
              These student groups play a crucial role in introducing young 
              developers to Web3 technologies.
            </p>
            
            <h4>APUBCC (Asia Pacific University Blockchain Club)</h4>
            <p>
              One of the most active university blockchain communities in Malaysia, 
              APUBCC has been instrumental in promoting blockchain education and 
              organizing hackathons for students.
            </p>
            <ul>
              <li><strong>Activities:</strong> Regular hackathons, workshops, and networking events</li>
              <li><strong>Focus Areas:</strong> Smart contract development, DeFi applications, NFT projects</li>
              <li><strong>Partnerships:</strong> Collaboration with industry partners and other university clubs</li>
              <li><strong>Achievements:</strong> Multiple hackathon wins and successful project launches</li>
            </ul>

            <h4>Monash University Malaysia</h4>
            <ul>
              <li><strong>Blockchain Society:</strong> Student-led organization promoting blockchain education</li>
              <li><strong>Hackathon Events:</strong> Annual blockchain hackathons with industry sponsors</li>
              <li><strong>Research Initiatives:</strong> Academic research in blockchain technology</li>
              <li><strong>Industry Connections:</strong> Partnerships with local and international blockchain companies</li>
            </ul>

            <h4>Sunway University</h4>
            <ul>
              <li><strong>Sunway Blockchain Club:</strong> Active student community organizing Web3 events</li>
              <li><strong>Innovation Hub:</strong> Dedicated space for blockchain and fintech projects</li>
              <li><strong>Competition Participation:</strong> Regular participation in national and international hackathons</li>
              <li><strong>Curriculum Integration:</strong> Blockchain courses and workshops integrated into academic programs</li>
            </ul>

            <h4>Tunku Abdul Rahman University College (TAR UC)</h4>
            <ul>
              <li><strong>TAR UC Blockchain Society:</strong> Student organization focused on blockchain education</li>
              <li><strong>Technical Workshops:</strong> Regular coding sessions and smart contract development</li>
              <li><strong>Industry Visits:</strong> Field trips to blockchain companies and startups</li>
              <li><strong>Project Showcases:</strong> Annual exhibitions of student blockchain projects</li>
            </ul>

            <h4>Other University Clubs</h4>
            <ul>
              <li><strong>Universiti Malaya (UM):</strong> Blockchain research group and student society</li>
              <li><strong>Universiti Putra Malaysia (UPM):</strong> Fintech and blockchain innovation center</li>
              <li><strong>Universiti Teknologi Malaysia (UTM):</strong> Blockchain development and research initiatives</li>
              <li><strong>Universiti Sains Malaysia (USM):</strong> Digital innovation hub with blockchain focus</li>
              <li><strong>Universiti Kebangsaan Malaysia (UKM):</strong> Blockchain research and student activities</li>
            </ul>
          </div>
        </section>

        {/* International Hackathons Section */}
        <section className="branch-section">
          <h2 className="section-title">International Web3 Hackathons</h2>
          <div className="content-card">
            <h3>Global Blockchain Innovation Events</h3>
            <p>
              International hackathons provide opportunities for Malaysian developers 
              to compete on a global stage, learn from international experts, and 
              showcase their skills to the worldwide Web3 community.
            </p>
            
            <h4>Major International Events</h4>
            <ul>
              <li><strong>ETHGlobal:</strong> Premier Ethereum hackathon series with events in multiple cities</li>
              <li><strong>Solana Global Hackathon:</strong> High-profile Solana ecosystem competitions</li>
              <li><strong>Polygon BuildIt:</strong> Layer-2 scaling hackathons with global participation</li>
              <li><strong>Chainlink Hackathon:</strong> Oracle and blockchain integration events</li>
              <li><strong>Filecoin Hackathon:</strong> Decentralized storage and Web3 infrastructure competitions</li>
            </ul>

            <h4>Regional Events</h4>
            <ul>
              <li><strong>Asia Blockchain Summit Hackathon:</strong> Regional blockchain innovation competition</li>
              <li><strong>Singapore Fintech Festival Hackathon:</strong> Southeast Asian fintech innovation event</li>
              <li><strong>Hong Kong Blockchain Week Hackathon:</strong> Asian blockchain ecosystem competition</li>
              <li><strong>Japan Blockchain Conference Hackathon:</strong> Japanese blockchain innovation event</li>
            </ul>

            <h4>Virtual and Hybrid Events</h4>
            <ul>
              <li><strong>Devpost Hackathons:</strong> Online platform hosting numerous Web3 hackathons</li>
              <li><strong>Gitcoin Hackathons:</strong> Quadratic funding hackathons for public goods</li>
              <li><strong>Bounty0x Hackathons:</strong> Decentralized bounty platform competitions</li>
              <li><strong>DoraHacks:</strong> Global hackathon platform with Web3 focus</li>
            </ul>

            <h4>Malaysian Participation</h4>
            <ul>
              <li><strong>Success Stories:</strong> Malaysian teams winning prizes in international competitions</li>
              <li><strong>Networking Opportunities:</strong> Connections with global blockchain community</li>
              <li><strong>Skill Development:</strong> Learning from international experts and peers</li>
              <li><strong>Project Showcase:</strong> Presenting Malaysian innovation to global audience</li>
            </ul>
          </div>
        </section>

        {/* Hackathon Benefits Section */}
        <section className="branch-section">
          <h2 className="section-title">Benefits of Participating in Web3 Hackathons</h2>
          <div className="content-card">
            <h3>Why Join Web3 Hackathons</h3>
            <p>
              Participating in Web3 hackathons offers numerous benefits for developers, 
              entrepreneurs, and blockchain enthusiasts, from skill development to 
              career opportunities.
            </p>
            
            <h4>Learning and Skill Development</h4>
            <ul>
              <li><strong>Hands-on Experience:</strong> Practical application of blockchain technologies</li>
              <li><strong>New Technologies:</strong> Exposure to cutting-edge Web3 tools and frameworks</li>
              <li><strong>Problem Solving:</strong> Real-world challenges and rapid prototyping</li>
              <li><strong>Best Practices:</strong> Learning from experienced developers and mentors</li>
            </ul>

            <h4>Career Opportunities</h4>
            <ul>
              <li><strong>Job Placements:</strong> Direct recruitment by participating companies</li>
              <li><strong>Portfolio Building:</strong> Showcase projects to potential employers</li>
              <li><strong>Networking:</strong> Connect with industry professionals and potential collaborators</li>
              <li><strong>Recognition:</strong> Awards and recognition for outstanding work</li>
            </ul>

            <h4>Entrepreneurial Opportunities</h4>
            <ul>
              <li><strong>Startup Formation:</strong> Hackathon projects evolving into successful companies</li>
              <li><strong>Funding Opportunities:</strong> Prize money and investment interest</li>
              <li><strong>Market Validation:</strong> Testing ideas with real users and feedback</li>
              <li><strong>Partnership Formation:</strong> Finding co-founders and team members</li>
            </ul>

            <h4>Community Building</h4>
            <ul>
              <li><strong>Team Formation:</strong> Building relationships with like-minded developers</li>
              <li><strong>Mentorship:</strong> Guidance from experienced blockchain professionals</li>
              <li><strong>Knowledge Sharing:</strong> Learning from peers and competitors</li>
              <li><strong>Long-term Connections:</strong> Building lasting professional relationships</li>
            </ul>
          </div>
        </section>

        {/* Tips for Success Section */}
        <section className="branch-section">
          <h2 className="section-title">Tips for Hackathon Success</h2>
          <div className="content-card">
            <h3>Maximizing Your Hackathon Experience</h3>
            <p>
              Success in Web3 hackathons requires preparation, teamwork, and 
              strategic thinking. Here are some tips to help you make the most 
              of your hackathon experience.
            </p>
            
            <h4>Pre-Hackathon Preparation</h4>
            <ul>
              <li><strong>Learn the Basics:</strong> Understand blockchain fundamentals and Web3 concepts</li>
              <li><strong>Practice Coding:</strong> Familiarize yourself with relevant programming languages and tools</li>
              <li><strong>Research the Theme:</strong> Understand the hackathon's focus area and requirements</li>
              <li><strong>Form a Team:</strong> Assemble a diverse team with complementary skills</li>
            </ul>

            <h4>During the Hackathon</h4>
            <ul>
              <li><strong>Plan Your Project:</strong> Start with a clear concept and scope</li>
              <li><strong>Focus on MVP:</strong> Build a working prototype rather than a perfect solution</li>
              <li><strong>Document Your Work:</strong> Keep track of your development process</li>
              <li><strong>Test Regularly:</strong> Ensure your project works as intended</li>
            </ul>

            <h4>Presentation and Demo</h4>
            <ul>
              <li><strong>Prepare Your Pitch:</strong> Create a compelling presentation of your project</li>
              <li><strong>Highlight Innovation:</strong> Emphasize what makes your solution unique</li>
              <li><strong>Show Technical Depth:</strong> Demonstrate your understanding of the technology</li>
              <li><strong>Practice Your Demo:</strong> Ensure smooth demonstration of your project</li>
            </ul>

            <h4>Post-Hackathon Follow-up</h4>
            <ul>
              <li><strong>Network Actively:</strong> Connect with judges, mentors, and other participants</li>
              <li><strong>Continue Development:</strong> Consider evolving your project into a full product</li>
              <li><strong>Share Your Experience:</strong> Document and share your learnings with the community</li>
              <li><strong>Stay Connected:</strong> Maintain relationships with your team and new contacts</li>
            </ul>

            <blockquote>
              "The best hackathon projects are those that solve real problems 
              with innovative solutions. Focus on creating value rather than 
              just winning prizes."
            </blockquote>
          </div>
        </section>

        {/* Future of Web3 Hackathons Section */}
        <section className="branch-section">
          <h2 className="section-title">The Future of Web3 Hackathons</h2>
          <div className="content-card">
            <h3>Emerging Trends and Opportunities</h3>
            <p>
              Web3 hackathons are evolving rapidly, with new formats, technologies, 
              and opportunities emerging as the blockchain ecosystem matures.
            </p>
            
            <h4>New Technologies and Focus Areas</h4>
            <ul>
              <li><strong>AI and Web3 Integration:</strong> Hackathons combining artificial intelligence with blockchain</li>
              <li><strong>Cross-Chain Solutions:</strong> Interoperability and multi-chain applications</li>
              <li><strong>Zero-Knowledge Proofs:</strong> Privacy-preserving blockchain applications</li>
              <li><strong>Decentralized Identity:</strong> Self-sovereign identity and authentication systems</li>
            </ul>

            <h4>Evolving Formats</h4>
            <ul>
              <li><strong>Hybrid Events:</strong> Combination of virtual and in-person participation</li>
              <li><strong>Longer Duration:</strong> Extended hackathons allowing more complex projects</li>
              <li><strong>Continuous Learning:</strong> Pre-hackathon training and post-event support</li>
              <li><strong>Industry Partnerships:</strong> Closer collaboration with established companies</li>
            </ul>

            <h4>Malaysia's Growing Role</h4>
            <ul>
              <li><strong>Local Innovation:</strong> Malaysia becoming a hub for Southeast Asian blockchain innovation</li>
              <li><strong>International Collaboration:</strong> Partnerships with global hackathon organizers</li>
              <li><strong>Talent Development:</strong> Focus on developing local Web3 talent</li>
              <li><strong>Industry Integration:</strong> Connecting hackathon projects with real business needs</li>
            </ul>

            <p>
              As Web3 technology continues to evolve, hackathons will remain 
              crucial platforms for innovation, learning, and community building. 
              Malaysian developers and organizations are well-positioned to play 
              an increasingly important role in the global Web3 ecosystem.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hackathon;
