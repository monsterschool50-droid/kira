import React, { useState } from 'react';
import './TestimonialsModal.css';
import { X, Star, User, Send } from 'lucide-react';


const initialReviews = [
  { id: 1, name: "Sarah Jenkins", rating: 5, text: "PetHaven helped me find my best friend! The process was so easy and the staff truly cares about animals.", date: "2 days ago" },
  { id: 2, name: "Mike Ross", rating: 4, text: "Great experience. Although the paperwork took a bit long, taking home my new puppy was worth it.", date: "1 week ago" },
  { id: 3, name: "Emily Blunt", rating: 5, text: "I adopted a senior cat, and she is the sweetest. Thank you for taking care of her until I found her!", date: "2 weeks ago" },
];

const TestimonialsModal = ({ onClose }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [rating, setRating] = useState(5); // Дефолт: 5 жылдыз


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newText) return;

    const newReview = {
      id: Date.now(),
      name: newName,
      text: newText,
      rating: rating,
      date: "Just now"
    };


    setReviews([newReview, ...reviews]);

    setNewName('');
    setNewText('');
    setRating(5);
  };

  return (
    <div className="testi-overlay" onClick={onClose}>
      <div className="testi-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-testi" onClick={onClose}><X size={24} /></button>

        <div className="testi-grid">


          <div className="testi-form-section">
            <h3>Leave a Review</h3>
            <p>Share your experience with us!</p>

            <form onSubmit={handleSubmit} className="review-form">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              <label>Rating</label>
              <div className="star-select">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    fill={star <= rating ? "#f1c40f" : "none"}
                    color={star <= rating ? "#f1c40f" : "#ccc"}
                    onClick={() => setRating(star)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>

              <label>Your Message</label>
              <textarea
                placeholder="Write something nice..."
                rows="4"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              ></textarea>

              <button type="submit" className="btn-submit">
                <Send size={16} /> Post Review
              </button>
            </form>
          </div>


          <div className="testi-list-section">
            <div className="list-header">
              <h3>Community Reviews ({reviews.length})</h3>
            </div>

            <div className="reviews-scroll">
              {reviews.map((rev) => (
                <div key={rev.id} className="review-card-full">
                  <div className="rev-top">
                    <div className="rev-user">
                      <div className="user-avatar"><User size={20} /></div>
                      <div>
                        <strong>{rev.name}</strong>
                        <span className="rev-date">{rev.date}</span>
                      </div>
                    </div>
                    <div className="rev-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < rev.rating ? "#f1c40f" : "#eee"} color="none" />
                      ))}
                    </div>
                  </div>
                  <p className="rev-text">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsModal;