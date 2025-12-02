import React from 'react';
import './Locator.css';
import { MapPin } from 'lucide-react';

const Locator = () => {
  return (
    <div className="container">
      <h2 className="section-title">Near Me Locator</h2>
      <div className="locator-box">
        <div className="loc-content">
          <h3>Find Vets & Shelters</h3>
          <div className="search-row">
             <input type="text" placeholder="Enter City..." />
             <button>SEARCH</button>
          </div>
        </div>
        <MapPin size={60} color="#e0e0e0" />
      </div>
    </div>
  );
};

export default Locator;