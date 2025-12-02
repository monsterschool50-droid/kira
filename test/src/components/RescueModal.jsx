import React, { useState } from 'react';
import './RescueModal.css';
import { X, ArrowRight, Heart, Share2 } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: "Rusty's Journey",
    date: "Rescued: Oct 2023",
    
    beforeImg: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=300&fit=crop",
    
    afterImg: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    desc: "Rusty was found alone and scared in a shelter cage. He wouldn't eat for days. Look at him now! He loves running in the park and has the brightest smile.",
    likes: 342
  },
  {
    id: 2,
    name: "Luna the Survivor",
    date: "Rescued: Nov 2023",
    
    beforeImg: "https://images.pexels.com/photos/8060212/pexels-photo-8060212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
    
    afterImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    desc: "We found Luna hiding under a car, shivering and dirty. After weeks of care and warm baths, she transformed into a fluffy princess who loves naps.",
    likes: 856
  },
  {
    id: 3,
    name: "Hope's Miracle",
    date: "Rescued: Jan 2024",
   
    beforeImg: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop",
    
    afterImg: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    desc: "Hope was severely malnourished when she arrived. She could barely stand. Today, she is full of energy, healthy, and represents the true power of love.",
    likes: 120
  }
];

const RescueModal = ({ onClose }) => {
  const [likes, setLikes] = useState(stories.map(s => s.likes));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div className="rescue-overlay" onClick={onClose}>
      <div className="rescue-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-rescue" onClick={onClose}><X size={24}/></button>

        <div className="rescue-header">
          <h2>Heartwarming Transformations</h2>
          <p>From lonely to loved. See the difference you make.</p>
        </div>

        <div className="stories-list">
          {stories.map((story, index) => (
            <div key={story.id} className="story-card">
              
              <div className="story-top">
                <h3>{story.name}</h3>
                <span className="story-date">{story.date}</span>
              </div>

              {/* Сүрөттөр: Мурда жана Кийин */}
              <div className="ba-container">
                <div className="ba-img">
                  <span className="ba-badge bad">Before</span>
                  <img src={story.beforeImg} alt="Before Rescue" />
                </div>
                
                <div className="ba-arrow">
                  <ArrowRight size={24} color="#555"/>
                </div>

                <div className="ba-img">
                  <span className="ba-badge good">After</span>
                  <img src={story.afterImg} alt="After Rescue" />
                </div>
              </div>

              <p className="story-text">{story.desc}</p>

              <div className="story-actions">
                <button className="btn-love" onClick={() => handleLike(index)}>
                   <Heart size={16} fill="#e74c3c" color="#e74c3c"/> {likes[index]} Loves
                </button>
                <button className="btn-share">
                   <Share2 size={16}/> Share
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RescueModal;