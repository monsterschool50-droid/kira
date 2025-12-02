import React, { useState } from 'react';
import './Adopt.css';
import { Search, Filter, Heart, CheckCircle, MapPin, Info, X } from 'lucide-react';


const adoptPets = [
  { id: 1, name: "Buddy", type: "Dog", age: "Puppy", size: "Small", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhdjov90cGg9zcJFMuU00LISvFgFbrGc6ow&s", tags: ["Friendly", "Good with kids"] },
  { id: 2, name: "Mittens", type: "Cat", age: "Adult", size: "Medium", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400", tags: ["Calm", "House trained"] },
  { id: 3, name: "Rex", type: "Dog", age: "Adult", size: "Large", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400", tags: ["Guard dog", "Active"] },
  { id: 4, name: "Goldie", type: "Fish", age: "Baby", size: "Small", img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400", tags: ["Easy care"] },
  { id: 5, name: "Bella", type: "Dog", age: "Senior", size: "Medium", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400", tags: ["Love cuddles"] },
  { id: 6, name: "Shadow", type: "Cat", age: "Kitten", size: "Small", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400", tags: ["Playful"] },
];

const Adopt = () => {
  const [filterType, setFilterType] = useState('All');
  const [selectedPet, setSelectedPet] = useState(null); 
  const [formSent, setFormSent] = useState(false); 

 
  const filteredPets = filterType === 'All' 
    ? adoptPets 
    : adoptPets.filter(pet => pet.type === filterType);

 
  const handleAdoptSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setSelectedPet(null);
      alert("Application Sent! We will call you.");
    }, 2000);
  };

  return (
    <div className="adopt-wrapper">
      
     
      <div className="adopt-hero">
        <div className="adopt-hero-content">
          <h1>Find Your New Best Friend</h1>
          <p>Thousands of homeless pets are waiting for a loving family like yours.</p>
        </div>
      </div>

      <div className="container">
        
        
        <div className="process-steps">
          <div className="step-card">
            <div className="step-icon">1</div>
            <h4>Find a Pet</h4>
            <p>Browse our list and find a pet that matches your lifestyle.</p>
          </div>
          <div className="step-line"></div>
          <div className="step-card">
            <div className="step-icon">2</div>
            <h4>Submit Form</h4>
            <p>Fill out a simple application form to let us know you.</p>
          </div>
          <div className="step-line"></div>
          <div className="step-card">
            <div className="step-icon">3</div>
            <h4>Meet & Greet</h4>
            <p>Visit the shelter, meet your pet, and take them home!</p>
          </div>
        </div>

    
        <div className="adopt-controls">
          <h3>Pets Available for Adoption</h3>
          <div className="filters">
            {['All', 'Dog', 'Cat', 'Fish'].map(type => (
              <button 
                key={type}
                className={`filter-btn ${filterType === type ? 'active' : ''}`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

       
        <div className="adopt-grid">
          {filteredPets.map(pet => (
            <div key={pet.id} className="adopt-card">
              <div className="ac-img">
                <img src={pet.img} alt={pet.name} />
                <span className="ac-badge">{pet.age}</span>
              </div>
              <div className="ac-info">
                <div className="ac-header">
                  <h3>{pet.name}</h3>
                  <span className="ac-type">{pet.type}</span>
                </div>
                <div className="ac-tags">
                  {pet.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                <div className="ac-details">
                  <span><CheckCircle size={14}/> Vaccinated</span>
                  <span><MapPin size={14}/> Shelter A</span>
                </div>
                <button className="btn-adopt-now" onClick={() => setSelectedPet(pet)}>
                  Adopt {pet.name}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

   
      {selectedPet && (
        <div className="adopt-overlay" onClick={() => setSelectedPet(null)}>
          <div className="adopt-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPet(null)}><X size={24}/></button>
            
            <div className="modal-header-adopt">
              <img src={selectedPet.img} alt="" />
              <div>
                <h2>Adopt {selectedPet.name}</h2>
                <p>Great choice! Please fill this form.</p>
              </div>
            </div>

            {formSent ? (
              <div className="success-msg">
                <Heart size={50} color="#e74c3c" fill="#e74c3c"/>
                <h3>Request Sent!</h3>
                <p>Our team will review your application and contact you.</p>
              </div>
            ) : (
              <form className="adopt-form" onSubmit={handleAdoptSubmit}>
                <label>Full Name</label>
                <input type="text" placeholder="Your Name" required/>
                
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 234 567 890" required/>
                
                <label>Do you have other pets?</label>
                <select>
                  <option>No</option>
                  <option>Yes, dogs</option>
                  <option>Yes, cats</option>
                </select>

                <label>Why do you want to adopt {selectedPet.name}?</label>
                <textarea rows="3" placeholder="Tell us a bit..."></textarea>

                <button type="submit" className="btn-submit-app">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Adopt;