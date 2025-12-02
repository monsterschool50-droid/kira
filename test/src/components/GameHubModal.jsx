import React, { useState, useEffect } from 'react';
import './GameHubModal.css';
import { X, ArrowLeft, Brain, Zap, HelpCircle, Trophy, RefreshCcw } from 'lucide-react';

// ЭСТУТУМ ОЮНУ
const cardImages = [
  { src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150", matched: false },
  { src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=150", matched: false },
  { src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=150", matched: false },
  { src: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=150", matched: false },
  { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=150", matched: false },
  { src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=150", matched: false },
];

const MemoryGame = ({ onBack }) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null); setChoiceTwo(null); setCards(shuffled); setTurns(0); setWon(false);
  };

  const handleChoice = (card) => { choiceOne ? setChoiceTwo(card) : setChoiceOne(card); };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prev => prev.map(c => c.src === choiceOne.src ? { ...c, matched: true } : c));
        resetTurn();
      } else { setTimeout(() => resetTurn(), 1000); }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => { if (cards.length > 0 && cards.every(c => c.matched)) setWon(true); }, [cards]);
  const resetTurn = () => { setChoiceOne(null); setChoiceTwo(null); setTurns(p => p + 1); setDisabled(false); };
  useEffect(() => { shuffleCards(); }, []);

  return (
    <div className="game-screen">
      <div className="game-top">
         <button onClick={onBack} className="btn-back"><ArrowLeft size={16}/> Menu</button>
         <h3>Memory Game</h3>
         <span>Moves: {turns}</span>
      </div>
      {won ? (
        <div className="win-msg"><Trophy size={50} color="#f1c40f"/> <h3>YOU WON!</h3> <button onClick={shuffleCards}>Play Again</button></div>
      ) : (
        <div className="mem-grid">
          {cards.map(card => (
            <div key={card.id} className={`mem-card ${card === choiceOne || card === choiceTwo || card.matched ? "flipped" : ""}`}>
              <img className="front" src={card.src} alt="" />
              <div className="back" onClick={() => !disabled && handleChoice(card)}>🐾</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ВИКТОРИНА
const triviaQuestions = [
  { q: "Which animal is known as the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Eagle"], a: 1 },
  { q: "How many hearts does an octopus have?", options: ["One", "Two", "Three", "Five"], a: 2 },
  { q: "What is the only mammal that can fly?", options: ["Bat", "Flying Squirrel", "Ostrich", "Penguin"], a: 0 },
  { q: "Which animal never sleeps?", options: ["Bullfrog", "Ant", "Shark", "Dolphin"], a: 0 },
  { q: "What is a group of lions called?", options: ["Pack", "Herd", "Pride", "School"], a: 2 },
];

const TriviaGame = ({ onBack }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === triviaQuestions[currentQ].a) setScore(score + 1);
    const nextQ = currentQ + 1;
    if (nextQ < triviaQuestions.length) setCurrentQ(nextQ);
    else setShowScore(true);
  };

  return (
    <div className="game-screen">
      <div className="game-top">
         <button onClick={onBack} className="btn-back"><ArrowLeft size={16}/> Menu</button>
         <h3>Animal Trivia</h3>
      </div>
      {showScore ? (
        <div className="win-msg">
           <Trophy size={50} color="#f1c40f"/>
           <h3>You scored {score} out of {triviaQuestions.length}</h3>
           <button onClick={() => { setCurrentQ(0); setScore(0); setShowScore(false); }}>Restart</button>
        </div>
      ) : (
        <div className="trivia-box">
           <div className="q-count">Question {currentQ + 1}/{triviaQuestions.length}</div>
           <h4 className="q-text">{triviaQuestions[currentQ].q}</h4>
           <div className="opt-grid">
             {triviaQuestions[currentQ].options.map((opt, i) => (
               <button key={i} className="opt-btn" onClick={() => handleAnswer(i)}>{opt}</button>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

// ЫЛДАМДЫК ОЮНУ
const WhackAMole = ({ onBack }) => {
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOn, setGameOn] = useState(false);

  useEffect(() => {
    let timer;
    let moleTimer;
    if (gameOn && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      moleTimer = setInterval(() => {
        setMoleIndex(Math.floor(Math.random() * 9));
      }, 700);
    } else if (timeLeft === 0) {
      setGameOn(false);
    }
    return () => { clearInterval(timer); clearInterval(moleTimer); };
  }, [gameOn, timeLeft]);

  const whack = (index) => {
    if (index === moleIndex) {
      setScore(score + 1);
      setMoleIndex(null); 
    }
  };

  const startGame = () => { setScore(0); setTimeLeft(30); setGameOn(true); };

  return (
    <div className="game-screen">
       <div className="game-top">
         <button onClick={onBack} className="btn-back"><ArrowLeft size={16}/> Menu</button>
         <h3>Catch the Pet!</h3>
         <div style={{display:'flex', gap:'15px'}}>
            <span>Score: {score}</span>
            <span>Time: {timeLeft}s</span>
         </div>
      </div>
      
      {!gameOn && timeLeft === 0 ? (
         <div className="win-msg">
            <Trophy size={50} color="#f1c40f"/> <h3>Time's Up! Score: {score}</h3>
            <button onClick={startGame}>Try Again</button>
         </div>
      ) : (
        <>
        {!gameOn && <div className="start-overlay"><button onClick={startGame} className="btn-big">START GAME</button></div>}
        <div className="mole-grid">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="hole" onClick={() => whack(i)}>
               {moleIndex === i && <span className="mole">🐶</span>}
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};


const GameHubModal = ({ onClose }) => {
  const [activeGame, setActiveGame] = useState(null); // null, 'memory', 'trivia', 'whack'

  return (
    <div className="game-overlay">
      <div className="game-container">
      
        <button className="close-hub" onClick={onClose}><X size={24}/></button>

        
        {!activeGame && (
          <div className="hub-menu">
            <h2>Game Arcade</h2>
            <p>Choose a game to play!</p>
            <div className="game-list">
              
              <div className="game-card" onClick={() => setActiveGame('memory')}>
                <div className="g-icon c-green"><Brain size={40}/></div>
                <h3>Memory Match</h3>
                <p>Find matching pairs.</p>
              </div>

              <div className="game-card" onClick={() => setActiveGame('trivia')}>
                <div className="g-icon c-blue"><HelpCircle size={40}/></div>
                <h3>Animal Trivia</h3>
                <p>Test your knowledge.</p>
              </div>

              <div className="game-card" onClick={() => setActiveGame('whack')}>
                <div className="g-icon c-orange"><Zap size={40}/></div>
                <h3>Catch the Pet</h3>
                <p>Test your speed!</p>
              </div>

            </div>
          </div>
        )}

        {/* Оюндар */}
        {activeGame === 'memory' && <MemoryGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'trivia' && <TriviaGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'whack' && <WhackAMole onBack={() => setActiveGame(null)} />}

      </div>
    </div>
  );
};

export default GameHubModal;