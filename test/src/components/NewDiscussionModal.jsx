import React, { useState } from 'react';
import './NewDiscussionModal.css';
import { X, Send, MessageCircle } from 'lucide-react';

const NewDiscussionModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

  
    const newPost = {
      id: Date.now(), 
      title: title,
      author: "You (Guest)",
      date: "Just now",
      comments: 0,
      likes: 0,
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png", 
      fullText: content
    };

    onSubmit(newPost); 
  };

  return (
    <div className="new-disc-overlay" onClick={onClose}>
      <div className="new-disc-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="new-disc-header">
          <h3>Start a New Discussion</h3>
          <button className="close-btn-nd" onClick={onClose}><X size={20}/></button>
        </div>

        <form onSubmit={handleSubmit} className="new-disc-form">
          <div className="form-group">
            <label>Discussion Title</label>
            <input 
              type="text" 
              placeholder="E.g., Help! My dog won't eat..." 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>Details</label>
            <textarea 
              placeholder="Describe your question or story here..." 
              rows="6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-post">
              <Send size={16}/> Post Discussion
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default NewDiscussionModal;