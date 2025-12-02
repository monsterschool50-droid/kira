import React, { useState } from 'react';
import './VideoModal.css';
import { X, Play, Clock } from 'lucide-react';


const videoList = [
  {
    id: 1,
    title: "Puppy Training Basics",
    author: "Zak George",
    duration: "10:15",
  
    videoId: "jFMA5ggFsXU", 
    thumb: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=120&fit=crop"
  },
  {
    id: 2,
    title: "Cat Body Language Decoded",
    author: "Jackson Galaxy",
    duration: "05:30",
  
    videoId: "3Kk709f2t1A", 
    thumb: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=120&fit=crop"
  },
  {
    id: 3,
    title: "Teach Your Dog to 'Shake'",
    author: "Love of Pets",
    duration: "02:40",

    videoId: "I_iE8q66fQk", 
    thumb: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=200&h=120&fit=crop"
  },
  {
    id: 4,
    title: "Hamster Care Guide",
    author: "Victoria Raechel",
    duration: "15:05",
   
    videoId: "xpzZl15b5iQ", 
    thumb: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=200&h=120&fit=crop"
  }
];

const VideoModal = ({ onClose }) => {
 
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <div className="vid-overlay" onClick={onClose}>
      <div className="vid-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-vid" onClick={onClose}><X size={24} color="white"/></button>

       
        <div className="video-player-wrapper">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

       
        <div className="vid-info">
          <h2>{currentVideo.title}</h2>
          <p>By {currentVideo.author} • {currentVideo.duration}</p>
        </div>

       
        <div className="playlist">
          <h3>Up Next</h3>
          <div className="playlist-grid">
            {videoList.map((video) => (
              <div 
                key={video.id} 
                className={`pl-item ${currentVideo.id === video.id ? 'active-vid' : ''}`}
                onClick={() => setCurrentVideo(video)}
              >
                <div className="pl-thumb">
                  <img src={video.thumb} alt={video.title} />
                  <div className="play-icon-sm"><Play size={12} fill="white"/></div>
                </div>
                <div className="pl-text">
                  <h4>{video.title}</h4>
                  <span><Clock size={12}/> {video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoModal;