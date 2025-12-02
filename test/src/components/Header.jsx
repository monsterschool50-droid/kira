import React, { useState } from 'react';
import './Header.css';
import { PawPrint, Search, Heart, X, ShoppingCart } from 'lucide-react';


const Header = ({ favorites = [], cartCount = 0, onNavigate, onOpenCart }) => {
  const [showList, setShowList] = useState(false); 

  return (
    <div className="header-wrapper">
      <div className="container header-content">
        
        
        <div className="logo" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>
          <PawPrint color="#1abc9c" size={32} />
          <span>PetHaven</span>
        </div>

     
        <ul className="nav-menu">
          <li onClick={() => onNavigate('home')}>Home</li>
          <li onClick={() => onNavigate('adopt')}>Adopt</li>
          <li onClick={() => onNavigate('community')}>Community</li>
          <li onClick={() => onNavigate('shop')}>Shop</li>
        </ul>

       
        <div className="header-actions">
          
       
          <div className="fav-wrap" onClick={() => setShowList(!showList)}>
            <Heart 
              size={22} 
              className="icon" 
              fill={favorites.length > 0 ? "#e74c3c" : "none"} 
              color={favorites.length > 0 ? "#e74c3c" : "#555"} 
            />
           
            {favorites.length > 0 && <span className="fav-count">{favorites.length}</span>}
            
            
            {showList && (
              <div className="fav-dropdown" onClick={(e) => e.stopPropagation()}>
                <div className="fav-head">
                  <span>Favorites</span>
                  <X size={16} onClick={() => setShowList(false)} cursor="pointer"/>
                </div>
                <div className="fav-body">
                  {favorites.length === 0 ? <p>No likes yet.</p> : (
                    favorites.map(pet => (
                      <div key={pet.id} className="fav-item">
                        <img src={pet.img} alt="" />
                        <span>{pet.name}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

         
          <div 
            className="fav-wrap" 
            style={{marginRight: '15px', cursor: 'pointer'}}
            onClick={onOpenCart} 
          >
             <ShoppingCart size={22} className="icon" />
            
             {cartCount > 0 && <span className="fav-count" style={{background: '#1abc9c'}}>{cartCount}</span>}
          </div>

          <button className="btn-explore" onClick={() => onNavigate('adopt')}>EXPLORE PETS</button>
        </div>
      </div>
    </div>
  );
};

export default Header;