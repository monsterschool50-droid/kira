import React, { useState } from 'react';
import './HelpModal.css';
import { X, Heart, DollarSign, Clock, CheckCircle, ArrowLeft } from 'lucide-react';

const HelpModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('donate'); 
  const [amount, setAmount] = useState(20); 
  const [isSubmitted, setIsSubmitted] = useState(false); // Форма жиберилдиби?

  
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
  
    setIsSubmitted(true);
  };

  return (
    <div className="help-overlay" onClick={onClose}>
      <div className="help-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-help" onClick={onClose}><X size={24}/></button>

        <div className="help-header">
          <h2>Make a Difference Today</h2>
          <p>Every bit of help saves a life.</p>
        </div>

      
        <div className="help-tabs">
          <button 
            className={`tab-item ${activeTab === 'donate' ? 'active' : ''}`}
            onClick={() => { setActiveTab('donate'); setIsSubmitted(false); }}
          >
            <DollarSign size={18}/> Donate
          </button>
          <button 
            className={`tab-item ${activeTab === 'volunteer' ? 'active' : ''}`}
            onClick={() => { setActiveTab('volunteer'); setIsSubmitted(false); }}
          >
            <Clock size={18}/> Volunteer
          </button>
          <button 
            className={`tab-item ${activeTab === 'sponsor' ? 'active' : ''}`}
            onClick={() => { setActiveTab('sponsor'); setIsSubmitted(false); }}
          >
            <Heart size={18}/> Sponsor
          </button>
        </div>

      
        <div className="help-body">
          
         
          {activeTab === 'donate' && (
            <div className="tab-pane fade-in">
              <h3>One-time Donation</h3>
              <p>Your donation provides food, shelter, and medical care.</p>
              
              <div className="amount-grid">
                {[10, 20, 50, 100].map((val) => (
                  <button 
                    key={val} 
                    className={`amt-btn ${amount === val ? 'selected' : ''}`}
                    onClick={() => setAmount(val)}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              
              <div className="impact-box">
                <CheckCircle size={16} color="#2ecc71"/>
                <span>${amount} feeds a shelter dog for {amount / 5} days!</span>
              </div>

              <button className="btn-action primary">Donate ${amount} Now</button>
            </div>
          )}

          
          {activeTab === 'volunteer' && (
            <div className="tab-pane fade-in">
              {isSubmitted ? (
                
                <div className="success-view">
                   <div className="success-icon">
                     <CheckCircle size={50} color="white" />
                   </div>
                   <h3>Thank You!</h3>
                   <p>Your application has been received. We will contact you shortly.</p>
                   <button className="btn-action secondary" onClick={() => setIsSubmitted(false)}>
                     <ArrowLeft size={16}/> Send Another
                   </button>
                </div>
              ) : (
               
                <>
                  <h3>Join Our Team</h3>
                  <p>Donate your time and love. Fill out the form below.</p>
                  
                  <form onSubmit={handleVolunteerSubmit} className="vol-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <select>
                      <option>Dog Walker</option>
                      <option>Cat Cuddler</option>
                      <option>Event Helper</option>
                      <option>Cleaner</option>
                    </select>
                    <button type="submit" className="btn-action secondary">
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          )}

        
          {activeTab === 'sponsor' && (
            <div className="tab-pane fade-in">
              <h3>Become a Monthly Sponsor</h3>
              <p>Choose an animal to support monthly until they find a home.</p>
              
              <div className="sponsor-list">
                 <div className="sponsor-card">
                   <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100" alt=""/>
                   <div><b>Charlie</b><span>Needs dental surgery</span></div>
                   <button className="btn-sm">Sponsor</button>
                 </div>
                 <div className="sponsor-card">
                   <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100" alt=""/>
                   <div><b>Luna</b><span>Needs special food</span></div>
                   <button className="btn-sm">Sponsor</button>
                 </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default HelpModal;