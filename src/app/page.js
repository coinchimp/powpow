// src/app/page.js
import Head from 'next/head';
import Image from 'next/image';

import Banner from './Banner';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className={styles.bannerText}>
        <p className={styles.bannerTopText}><span className={styles.highlight2}>PoWPoW</span> is the first, fastest, most fair, and truly decentralized mineable meme token ever</p>
        <p>
          The first <span className={styles.highlight}>Proof of Work and Layer2</span> coin of its kind with no need to trust a third party indexer for validation.
          Combining <span className={styles.highlight}>UTXO security and scalability, low rates</span>, and offering a <span className={styles.highlight}>high speed over 1000 tps</span>.
        </p>
      </div>
      <div className={styles.featuresSection}>
        <Image src="/powpow_front_picture.jpg" alt="Features Image" width={300} height={300} className={styles.featuresImage} />
        <div className={styles.featuresText}>
          <h2>Launch Conditions</h2>
          <ul>
            <li>PoW Mineable Token</li>
            <li>No Presale</li>
            <li>No Pre-Allocation</li>
            <li>Fair Launch</li>
            <li>Community Driven</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomColumn}>
          <h2>Roadmap 2024 Q2</h2>
          <p>
            Community Launch: Twitter and Discord<br/>
            White Paper Final Version<br/>
            Token is launched<br/>
            Pre-mining by Community members<br/>                
            Wallet Extension Beta Testing<br/>        
          </p>
        </div>
        <div className={styles.bottomColumn}>
          <h2>Roadmap 2024 Q3</h2>
          <p>
            Wallet Extension is launched<br/>            
            First Descentralized Exchange<br/>
            Market Place<br/>
            NFT Airdrop and more...<br/>
            First Centralized Exchange (*)
          </p>
        </div>
      </div>
      <div className={styles.poweredBy}>
        <Image src="/radiant_logo.png" alt="Randiant Logo" width={30} height={30} className={styles.poweredByLogo} />
        <a href="https://radiantblockchain.org" target="_blank" rel="noopener noreferrer" className={styles.poweredByText}>
        <p >Powered by Radiant</p>
        </a>
      </div>
    </div>
  );
}
