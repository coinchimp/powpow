// src/app/layout.js
import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'PowPow RXD Meme Coin',
  description: 'PowPow RXD Meme Coin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <title>PowPow RXD Meme Coin</title>
        <meta name="description" content="PowPow RXD Meme Coin" />
      </head>
      <body>
        <div className="top-bar">
          <div className="logo-container">
            <Image src="/logo.png" alt="PowPow RXD Meme Coin" width={40} height={40} />
            <span className="logo-text">PoWPoW</span>
          </div>
          <div className="icon-container">
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/discord.png" alt="Discord" width={30} height={30} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/telegram.png" alt="Telegram" width={30} height={30} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.png" alt="X" width={30} height={30} />
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
