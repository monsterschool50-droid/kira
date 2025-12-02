import React, { useState } from 'react';
import './Animals.css';
import { Heart } from 'lucide-react';
import AnimalModal from './AnimalModal';


const animalsData = [
  { id: 1, type: 'dog', name: 'Bella', breed: 'Golden Retriever', age: '2 years', gender: 'Female', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400', desc: 'Bella loves playing fetch.' },
  { id: 2, type: 'dog', name: 'Charlie', breed: 'Beagle', age: '1 year', gender: 'Male', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400', desc: 'Charlie is a curious puppy.' },
  { id: 3, type: 'dog', name: 'Max', breed: 'French Bulldog', age: '3 years', gender: 'Male', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400', desc: 'Max loves naps.' },
  { id: 4, type: 'cat', name: 'Luna', breed: 'Siamese Cat', age: '2 years', gender: 'Female', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400', desc: 'Luna is elegant and calm.' },
  { id: 5, type: 'dog', name: 'Cooper', breed: 'Labrador', age: '4 months', gender: 'Male', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400', desc: 'Cooper is just a baby!' },
  { id: 6, type: 'dog', name: 'Lucy', breed: 'Poodle', age: '5 years', gender: 'Female', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400', desc: 'Lucy is a trained therapy dog.' },
  { id: 7, type: 'dog', name: 'Rocky', breed: 'Bulldog', age: '3 years', gender: 'Male', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400', desc: 'Rocky is a big softie.' },
  { id: 8, type: 'dog', name: 'Daisy', breed: 'Corgi', age: '1 year', gender: 'Female', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400', desc: 'Daisy has a big personality!' },
  { id: 9, type: 'cat', name: 'Milo', breed: 'Tabby Cat', age: '6 months', gender: 'Male', img: 'data:image/jpeg;base64,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', desc: 'Milo is very playful.' },
  { id: 10, type: 'dog', name: 'Bailey', breed: 'Spaniel', age: '2 years', gender: 'Female', img: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=400', desc: 'Bailey loves swimming.' },
  { id: 11, type: 'dog', name: 'Coco', breed: 'Pug', age: '4 years', gender: 'Female', img: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=400', desc: 'Coco loves belly rubs.' },
  { id: 12, type: 'dog', name: 'Teddy', breed: 'Chihuahua', age: '2 years', gender: 'Male', img: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400', desc: 'Teddy will protect you!' },

];

const Animals = ({ favorites = [], onToggleFavorite }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [filter, setFilter] = useState('all');


  const filteredData = filter === 'all' 
    ? animalsData 
    : animalsData.filter(item => item.type === filter);

 
  const btnStyle = (type) => ({
    padding: '8px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginRight: '10px', fontSize: '12px',
    backgroundColor: filter === type ? '#2ecc71' : '#e0e0e0', 
    color: filter === type ? 'white' : '#555', transition: '0.3s'
  });

  return (
    <div className="container" style={{marginTop: '30px'}}>
      
     
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
        <span className="section-head" style={{marginBottom: 0}}>FEATURED ANIMALS</span>
        <div>
          <button style={btnStyle('all')} onClick={() => setFilter('all')}>All</button>
          <button style={btnStyle('dog')} onClick={() => setFilter('dog')}>Dogs</button>
          <button style={btnStyle('cat')} onClick={() => setFilter('cat')}>Cats</button>
        </div>
      </div>

    
      <div className="animals-grid">
        {filteredData.map((animal) => {
         
          const isLiked = favorites.some(fav => fav.id === animal.id);

          return (
            <div 
              key={animal.id} 
              className="animal-card" 
              onClick={() => setSelectedAnimal(animal)}
            >
              <img src={animal.img} alt={animal.name} />
              
          
              <div 
                className="like-btn" 
                onClick={(e) => {
                  e.stopPropagation(); 
                  onToggleFavorite(animal); 
                }}
                style={{ backgroundColor: isLiked ? '#e74c3c' : 'rgba(0,0,0,0.3)' }}
              >
                <Heart size={14} color="white" fill={isLiked ? "white" : "none"} />
              </div>

              <div style={{position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent, rgba(0,0,0,0.8))', padding:'10px', color:'white'}}>
                 <span style={{fontSize:'12px', fontWeight:'bold'}}>{animal.name}</span>
                 <span style={{fontSize:'10px', opacity: 0.8, display: 'block'}}>{animal.breed}</span>
              </div>
            </div>
          );
        })}
      </div>

   
      {selectedAnimal && (
        <AnimalModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
      )}
      
    </div>
  );
};

export default Animals;