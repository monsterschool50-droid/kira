import React, { useState } from 'react';
import './InfoCards.css';
import { Globe, Gamepad2, Info } from 'lucide-react';
import WikiModal from './WikiModal';
import GameHubModal from './GameHubModal';
import RescueModal from './RescueModal'; // 1. Жаңы файлды чакырабыз

const InfoCards = () => {
  const [showWiki, setShowWiki] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showRescue, setShowRescue] = useState(false); // 2. State

  return (
    <div className="container">
      <div className="info-grid">
        
       
        <div className="info-box blue">
          <Globe size={32} color="#00acc1" />
          <h3>ANIMAL WIKI ENCYCLOPEDIA</h3>
          <p>Learn specific traits and behaviors.</p>
          <button className="btn-pill" onClick={() => setShowWiki(true)}>EXPLORE SPECIES</button>
        </div>

      
        <div className="info-box green">
          <div className="icons-row"><Gamepad2 size={32} color="#7cb342" /></div>
          <h3>GAMES & QUIZZES</h3>
          <p>Arcade: Memory, Trivia & Speed!</p>
          <button className="btn-pill" onClick={() => setShowGame(true)}>PLAY NOW</button>
        </div>

      
        <div className="info-box orange">
          <h3>RESCUE STORIES</h3>
          <div className="avatars-row">
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=50" alt=""/>
            <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=50" alt=""/>
          </div>
          <p>Stories that inspire.</p>
          {/* 3. Баскычка байлоо */}
          <span 
             style={{fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline'}}
             onClick={() => setShowRescue(true)}
          >
             Read Stories &rarr;
          </span>
        </div>
      </div>

      {showWiki && <WikiModal onClose={() => setShowWiki(false)} />}
      {showGame && <GameHubModal onClose={() => setShowGame(false)} />}
      
      {/* 4. Модалды көрсөтүү */}
      {showRescue && <RescueModal onClose={() => setShowRescue(false)} />}
    
    </div>
  );
};
export default InfoCards;