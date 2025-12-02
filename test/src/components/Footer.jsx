import React from 'react';
import './Footer.css';
import { PawPrint, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container footer-cont">
        <div className="f-item">
          <div className="f-logo"><PawPrint color="#27ae60" size={20}/> PetHaven</div>
        </div>
        <div className="f-item">
          <b>About Us</b>
          <span>Our Story</span>
          <span>Mission</span>
        </div>
        <div className="f-item">
          <b>Help Center</b>
          <span>FAQ</span>
          <span>Support</span>
        </div>
        <div className="f-item">
          <b>Follow Us</b>
          <div className="soc-row">
             <Facebook size={18} />
             <Twitter size={18} />
             <Youtube size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;