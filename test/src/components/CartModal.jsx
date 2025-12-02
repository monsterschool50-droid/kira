import React from 'react';
import './CartModal.css';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const CartModal = ({ cartItems, onClose, onRemoveItem }) => {
  
  //  эсептөө
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.05; // 5% салык
  const total = subtotal + tax;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        
        
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={24} color="#333" />
            <h2>Your Cart ({cartItems.length})</h2>
          </div>
          <button className="close-cart" onClick={onClose}><X size={24}/></button>
        </div>

       
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty Cart" />
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any treats for your pet yet.</p>
              <button className="btn-start-shopping" onClick={onClose}>Start Shopping</button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <span className="item-cat">{item.category}</span>
                    <span className="item-price">${item.price}</span>
                  </div>
                  <button className="btn-remove" onClick={() => onRemoveItem(item.id)}>
                    <Trash2 size={18}/>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

       
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="price-row">
              <span>Subtotal</span>
              <b>${subtotal.toFixed(2)}</b>
            </div>
            <div className="price-row">
              <span>Tax (5%)</span>
              <b>${tax.toFixed(2)}</b>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span className="total-price">${total.toFixed(2)}</span>
            </div>
            
            <button className="btn-checkout">
              Checkout <ArrowRight size={18}/>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartModal;