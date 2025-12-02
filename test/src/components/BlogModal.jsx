import React, { useState } from 'react';
import './BlogModal.css';
import { X, Clock, User, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Seven Senses: How Cats See the World",
    author: "Dr. Sarah Meow",
    date: "Dec 10, 2023",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=300&fit=crop",
    content: `
      Did you know cats have a wider field of view than humans? While we see 180 degrees, cats see 200 degrees!
      
      However, they don't see colors as vividly as we do. Their world is mostly shades of blue and gray. But what they lack in color, they make up for in night vision. A cat only needs one-sixth of the light a human needs to see clearly.
      
      Their whiskers are also powerful sensors, detecting tiny changes in air currents to hunt prey even in total darkness.
    `
  },
  {
    id: 2,
    title: "Understanding Dog Body Language",
    author: "John Barker",
    date: "Nov 22, 2023",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=300&fit=crop",
    content: `
      Is your dog wagging its tail? That doesn't always mean they are happy!
      
      If the tail is wagging to the right, it usually signals positive emotions. To the left? It might mean nervousness.
      
      Also, watch the ears. Ears forward means they are alert or interested. Ears pinned back can mean fear or submission. Learning to "speak dog" can help you bond deeper with your furry friend.
    `
  },
  {
    id: 3,
    title: "Winter Care Tips for Pets",
    author: "Vet Clinic",
    date: "Dec 01, 2023",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=300&fit=crop",
    content: `
      Winter is coming! Here is how to keep your pets safe.
      
      1. Protect the Paws: Salt on sidewalks can hurt dog paws. Use booties or wash their feet after walks.
      2. Keep them Warm: Short-haired dogs might need a sweater.
      3. Hydration: Animals burn more energy staying warm, so make sure they have plenty of water and slightly more food than usual.
    `
  }
];

const BlogModal = ({ onClose }) => {
  const [activePost, setActivePost] = useState(blogPosts[0]);

  return (
    <div className="blog-overlay" onClick={onClose}>
      <div className="blog-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-blog" onClick={onClose}><X size={24}/></button>

        <div className="blog-layout">
          
        
          <div className="blog-sidebar">
            <h3>Latest Articles</h3>
            <div className="post-list">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className={`post-preview ${activePost.id === post.id ? 'active-post' : ''}`}
                  onClick={() => setActivePost(post)}
                >
                  <h4>{post.title}</h4>
                  <span className="post-meta">{post.date} • {post.readTime}</span>
                  <ChevronRight className="arrow-icon" size={16}/>
                </div>
              ))}
            </div>
          </div>

         
          <div className="blog-reader">
            <div className="reader-header">
              <img src={activePost.img} alt={activePost.title} className="reader-img"/>
              <div className="reader-title">
                <h2>{activePost.title}</h2>
                <div className="author-row">
                  <User size={14}/> <span>{activePost.author}</span>
                  <span className="dot">•</span>
                  <Clock size={14}/> <span>{activePost.readTime}</span>
                </div>
              </div>
            </div>
            <div className="reader-body">
              {activePost.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogModal;