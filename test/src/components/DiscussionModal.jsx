import React from 'react';
import './DiscussionModal.css';
import { X, Heart, MessageSquare, Share2, Send, User } from 'lucide-react';

const DiscussionModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="disc-overlay" onClick={onClose}>
      <div className="disc-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-disc" onClick={onClose}><X size={24}/></button>

        {/* HEADER: Автор жөнүндө маалымат */}
        <div className="disc-header">
          <img src={data.avatar} alt={data.author} className="d-avatar"/>
          <div>
            <h3 className="d-author">{data.author}</h3>
            <span className="d-date">{data.date} • Community Member</span>
          </div>
        </div>

        {/*  кеңеш/пост */}
        <div className="disc-body">
          <h2 className="d-title">{data.title}</h2>
          <div className="d-text">
            {data.fullText.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Лайк, Бөлүшүү */}
        <div className="disc-actions">
          <button className="act-btn"><Heart size={18}/> {data.likes} Likes</button>
          <button className="act-btn"><MessageSquare size={18}/> {data.comments} Comments</button>
          <button className="act-btn"><Share2 size={18}/> Share</button>
        </div>

        {/*  Комментарийлер */}
        <div className="disc-comments">
          <h4>Comments</h4>
          
        
          <div className="comment-item">
            <div className="c-avatar"><User size={16}/></div>
            <div className="c-content">
              <b>Alice Wonder</b>
              <p>Wow, this is exactly what I needed! Thanks for sharing.</p>
            </div>
          </div>
          <div className="comment-item">
            <div className="c-avatar"><User size={16}/></div>
            <div className="c-content">
              <b>Bob Builder</b>
              <p>I tried this method and it works perfectly. Great advice!</p>
            </div>
          </div>

          <div className="comment-input">
            <input type="text" placeholder="Write a comment..." />
            <button><Send size={16}/></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiscussionModal;