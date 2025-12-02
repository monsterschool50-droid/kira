import React, { useState } from 'react';
import './Dashboard.css';
import { PlayCircle, Calendar, MapPin, User, Mail, Heart } from 'lucide-react';


import VideoModal from './VideoModal';
import BlogModal from './BlogModal';
import EventsModal from './EventsModal';
import TestimonialsModal from './TestimonialsModal';
import HelpModal from './HelpModal';
import RealMap from './RealMap'; // <-- ЧЫНЫГЫ КАРТА

const Dashboard = () => {
  // Ар бир терезе үчүн өзүнчө state (ачык/жабык)
  const [showVideo, setShowVideo] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showTesti, setShowTesti] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="container dashboard-grid">
      
      
      <div className="col-stack">
        
        
        <div 
           className="card-style pointer-hover" 
           onClick={() => setShowVideo(true)}
        >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <span className="section-head">VIDEO GUIDES</span>
             <PlayCircle size={16} color="#1abc9c"/>
          </div>
          
          <div className="list-item">
            <div className="vid-thumb"><PlayCircle color="white"/></div>
            <div>
              <strong>Puppy Training</strong>
              <div className="sub-text">Click to watch now</div>
            </div>
          </div>
          <div className="list-item">
            <div className="vid-thumb"><PlayCircle color="white"/></div>
            <div>
              <strong>Cat Grooming Tips</strong>
              <div className="sub-text">Essential care guide</div>
            </div>
          </div>
        </div>

      
        <div 
          className="card-style pointer-hover"
          onClick={() => setShowBlog(true)}
        >
          <span className="section-head">FROM OUR BLOG</span>
          <div className="blog-item">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100" alt="cat"/>
            <div>
              <strong>Seven Senses</strong>
              <div className="sub-text">How cats see the world.</div>
            </div>
          </div>
        </div>

        {/* NEWSLETTER (Статикалык) */}
        <div className="card-style">
           <span className="section-head">JOIN OUR NEWSLETTER</span>
           <div className="tags-row">
             <span className="tag t-red"><Mail size={12}/> Dogs</span>
             <span className="tag t-orange"><Mail size={12}/> Cats</span>
             <span className="tag t-green"><Mail size={12}/> Birds</span>
           </div>
        </div>
      </div>

      <div className="col-stack">
        
       
        <div className="card-style">
          <span className="section-head">GAMES & QUIZZES</span>
          <table className="simple-table">
             <thead><tr><th>Game</th><th>Plays</th></tr></thead>
             <tbody>
               <tr><td>Guess Breed</td><td>Today</td></tr>
               <tr><td>Pet Slumber</td><td>Yesterday</td></tr>
               <tr><td>Trivia</td><td>Over time</td></tr>
             </tbody>
          </table>
        </div>

        {/*  КАРТА  */}
        <div className="card-style map-wrap">
           
         
           <div style={{ height: '250px', width: '100%', position: 'relative', zIndex: 1 }}>
              <RealMap />
           </div>

          
           <div className="map-overlay">
              <span className="section-head">NEAR ME LOCATOR</span>
              <div className="search-inp">
                <input type="text" placeholder="Enter Zip Code" />
                <button>GO</button>
              </div>
           </div>
        </div>

      </div>

    
      <div className="col-stack">
        
    
        <div 
          className="card-style pointer-hover"
          onClick={() => setShowEvents(true)}
        >
          <span className="section-head">UPCOMING EVENTS</span>
          <div className="event-row">
            <Calendar size={18} color="#e67e22"/>
            <span><strong>Puppy Yoga</strong> - Dec 12</span>
          </div>
          <div className="event-row">
             <Calendar size={18} color="#e67e22"/>
             <span><strong>Cat Show</strong> - Dec 15</span>
          </div>
          <div className="event-row">
             <Calendar size={18} color="#e67e22"/>
             <span><strong>Snuggle Pets</strong> - Dec 20</span>
          </div>
        </div>

       
        <div 
          className="card-style pointer-hover"
          onClick={() => setShowTesti(true)}
        >
          <span className="section-head">TESTIMONIALS</span>
          <div className="review-box">
             <div className="u-avatar"><User size={16}/></div>
             <p>"Found my best friend here!"</p>
          </div>
          <div className="review-box">
             <div className="u-avatar"><User size={16}/></div>
             <p>"Great service and care."</p>
          </div>
        </div>

      
        <div 
           className="card-style pointer-hover"
           onClick={() => setShowHelp(true)}
        >
           <span className="section-head">HOW TO HELP</span>
           <div className="help-icons">
             <div className="h-item">
               <div className="circ"><Heart size={16}/></div>
               <span>Volunteer</span>
             </div>
             <div className="h-item">
               <div className="circ"><Mail size={16}/></div>
               <span>Donate</span>
             </div>
             <div className="h-item">
               <div className="circ"><User size={16}/></div>
               <span>Sponsor</span>
             </div>
           </div>
        </div>
      </div>

     
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
      {showBlog && <BlogModal onClose={() => setShowBlog(false)} />}
      {showEvents && <EventsModal onClose={() => setShowEvents(false)} />}
      {showTesti && <TestimonialsModal onClose={() => setShowTesti(false)} />}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}

    </div>
  );
};

export default Dashboard;