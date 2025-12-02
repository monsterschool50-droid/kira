import React, { useState, useEffect } from 'react';
import './App.css';


import Header from './components/Header';
import Hero from './components/Hero';
import Animals from './components/Animals';
import InfoCards from './components/InfoCards';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Community from './components/Community';
import Shop from './components/Shop';
import Adopt from './components/Adopt';
import CustomCursor from './components/CustomCursor';
import CartModal from './components/CartModal';

function App() {



  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavs = localStorage.getItem('petFavorites');
      return savedFavs ? JSON.parse(savedFavs) : [];
    } catch (error) {
      console.error("Favorites жүктөөдө ката кетти:", error);
      return [];
    }
  });


  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('petCart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Cart жүктөөдө ката кетти:", error);
      return [];
    }
  });


  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'community', 'shop', 'adopt'


  const [isCartOpen, setIsCartOpen] = useState(false);


  useEffect(() => {
    localStorage.setItem('petFavorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('petCart', JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);





  const handleLikeToggle = (animal) => {
    const exists = favorites.find(fav => fav.id === animal.id);
    if (exists) {

      setFavorites(favorites.filter(fav => fav.id !== animal.id));
    } else {

      setFavorites([...favorites, animal]);
    }
  };

  const handleAddToCart = (product) => {

    setCart([...cart, product]);

    setIsCartOpen(true);
  };


  const handleRemoveFromCart = (id) => {

    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div className="App">

      <CustomCursor />


      <Header
        favorites={favorites}
        cartCount={cart.length}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenCart={() => setIsCartOpen(true)}
      />




      {currentPage === 'home' && (
        <div className="page-animate">
          <Hero />
          <Animals favorites={favorites} onToggleFavorite={handleLikeToggle} />
          <InfoCards />
          <Dashboard />
        </div>
      )}


      {currentPage === 'adopt' && (
        <div className="page-animate">
          <Adopt />
        </div>
      )}


      {currentPage === 'community' && (
        <div className="page-animate">
          <Community />
        </div>
      )}


      {currentPage === 'shop' && (
        <div className="page-animate">
          <Shop onAddToCart={handleAddToCart} />
        </div>
      )}


      <Footer />




      {isCartOpen && (
        <CartModal
          cartItems={cart}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={handleRemoveFromCart}
        />
      )}

    </div>
  );
};

export default App;