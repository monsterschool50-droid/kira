import React from 'react';
import './AnimalModal.css';
import { X, Heart, ShieldCheck } from 'lucide-react';

const AnimalModal = ({ animal, onClose }) => {
  if (!animal) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
     
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>
          <X size={24} color="#555"/>
        </button>

        <div className="modal-grid">
          <div className="modal-img-wrapper">
            <img src={animal.img} alt={animal.name} />
          </div>
          
          <div className="modal-info">
            <div className="modal-header">
              <h2>{animal.name}</h2>
              <span className="breed-tag">{animal.breed}</span>
            </div>
            
            <p className="desc">{animal.desc}</p>

            <div className="stats-row">
              <div className="stat">
                <span className="label">Age</span>
                <span className="value">{animal.age}</span>
              </div>
              <div className="stat">
                <span className="label">Gender</span>
                <span className="value">{animal.gender}</span>
              </div>
              <div className="stat">
                <span className="label">Location</span>
                <span className="value">NY, USA</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-adopt">
                Adopt {animal.name} <ShieldCheck size={16} style={{marginLeft: 5}}/>
              </button>
              <button className="btn-fav">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnimalModal;