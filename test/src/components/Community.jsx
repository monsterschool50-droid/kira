import React, { useState } from 'react';
import './Community.css';
import { Search, MessageSquare, Heart, User, PlusCircle, ArrowRight } from 'lucide-react';
import DiscussionModal from './DiscussionModal';
import NewDiscussionModal from './NewDiscussionModal';

const initialDiscussions = [
  {
    id: 1,
    title: "Best Tips for Puppy Training",
    author: "Sarah Jenkins",
    date: "2 hours ago",
    comments: 15,
    likes: 42,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50",
    fullText: `Hi everyone! I just adopted a Golden Retriever puppy, and here are 5 things that really helped me:
    
    1. Consistency is key. Use the same words for commands.
    2. Crate training helps with potty training significantly.
    3. Socialize them early! Let them meet other dogs and people.
    4. Use positive reinforcement (treats!) instead of punishment.
    5. Be patient. It takes time, but it's worth it.
    
    Hope this helps anyone starting their journey!`
  },
  {
    id: 2,
    title: "Best Tips for New Cat Owners",
    author: "Mike Ross",
    date: "4 hours ago",
    comments: 8,
    likes: 23,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50",
    fullText: `Cats are very different from dogs! Here is what I learned:
    
    - Give them space. Let the cat come to you.
    - Scratching is normal. Get a scratching post so they don't ruin your sofa.
    - Wet food is better for hydration than just dry kibble.
    - Play with them! Cats get bored too.
    
    Enjoy your new feline friend!`
  },
  {
    id: 3,
    title: "Dog Food: Raw Diet vs Kibble?",
    author: "Emily Blunt",
    date: "5 hours ago",
    comments: 32,
    likes: 56,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50",
    fullText: `I have been researching diets for my bulldog.
    
    Raw Diet Pros: Shinier coat, cleaner teeth, smaller stool.
    Raw Diet Cons: Expensive, time-consuming preparation, risk of bacteria.
    
    Kibble Pros: Convenient, balanced nutrition (if high quality), cheaper.
    Kibble Cons: Can contain fillers and preservatives.
    
    What do you guys think? I'm currently mixing both.`
  },
  {
    id: 4,
    title: "My Cat Won't Stop Scratching!",
    author: "John Doe",
    date: "1 day ago",
    comments: 12,
    likes: 18,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50",
    fullText: `Help! My cat is destroying my new sofa. I bought a scratching post, but he ignores it.
    
    I tried using catnip on the post, but he just licks it and goes back to the sofa. Has anyone used double-sided tape? Does it work?`
  },
  {
    id: 5,
    title: "Traveling with Pets: Guide",
    author: "Anna Smith",
    date: "1 day ago",
    comments: 45,
    likes: 120,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
    fullText: `Just came back from a road trip with my Husky. Here are my essentials:
    
    1. Collapsible water bowl.
    2. Seatbelt harness (Safety first!).
    3. A copy of vaccination records.
    4. Their favorite blanket (smells like home).
    5. Lots of poop bags!
    
    Safe travels everyone!`
  },
  {
    id: 6,
    title: "Funny Parrot Stories",
    author: "Tom Hanks",
    date: "2 days ago",
    comments: 20,
    likes: 89,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    fullText: `My parrot learned to mimic the microwave beep. Now, every time I'm in the kitchen, I think my food is ready, but it's just the bird laughing at me!
    
    Does anyone else have a prankster pet? Share your stories below!`
  }
];

const Community = () => {
  const [selectedDisc, setSelectedDisc] = useState(null);
  

  const [discussionsList, setDiscussionsList] = useState(initialDiscussions);
  
  
  const [showNewPost, setShowNewPost] = useState(false);

  
  const handleAddPost = (newPost) => {
    setDiscussionsList([newPost, ...discussionsList]); 
    setShowNewPost(false); 
  };

  return (
    <div className="comm-wrapper">
      <div className="comm-hero">
        <div className="comm-overlay">
          <h1>Welcome to Community Hub</h1>
          <p>Connect, share stories, and get advice from pet lovers.</p>
        </div>
      </div>

      <div className="container comm-content">
        <div className="comm-actions">
           
          
           <button className="btn-new-post" onClick={() => setShowNewPost(true)}>
             <PlusCircle size={18}/> Start New Discussion
           </button>

           <div className="comm-search">
             <input type="text" placeholder="Search topics..." />
             <Search size={18} color="#888"/>
           </div>
        </div>

        <div className="comm-grid">
          <div className="comm-main">
            <div className="section-header">
              <h3>Featured Discussions</h3>
              <div className="sort-opts"><span>All</span> <ArrowRight size={14}/></div>
            </div>

            <div className="disc-grid">
            
              {discussionsList.map((item) => (
                <div 
                  key={item.id} 
                  className="disc-card pointer-hover"
                  onClick={() => setSelectedDisc(item)}
                  style={{cursor: 'pointer'}}
                >
                  <div className="disc-top">
                    <img src={item.avatar} alt="user" className="user-av"/>
                    <div>
                      <h4>{item.title}</h4>
                      <span className="post-meta">{item.author} • {item.date}</span>
                    </div>
                  </div>
                  <div className="disc-stats">
                    <span><MessageSquare size={14}/> {item.comments}</span>
                    <span><Heart size={14}/> {item.likes}</span>
                  </div>
                </div>
              ))}
            </div>

          
            <div className="section-header mt-40">
              <h3>Latest Spotlight</h3>
            </div>
            <div className="spotlight-box">
              <div className="spot-item">
                 <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100" alt=""/>
                 <div><b>Dogs & Humans</b><p>Scientific proof that dogs understand us.</p></div>
              </div>
              <div className="spot-item">
                 <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100" alt=""/>
                 <div><b>Cats Tips</b><p>Why cats love small boxes.</p></div>
              </div>
            </div>
          </div>

          <div className="comm-sidebar">
            <div className="sidebar-box">
              <h4>Trending Topics</h4>
              <ul className="trend-list">
                <li>#PuppyTraining</li><li>#CatHealth</li><li>#PetAdoption</li><li>#FunnyPets</li><li>#VetAdvice</li>
              </ul>
            </div>
            <div className="sidebar-box">
              <h4>Latest Posts</h4>
              <div className="mini-post"><User size={16} className="u-icon"/><div><b>Nakls Tey</b><span>Homework done!</span></div></div>
              <div className="mini-post"><User size={16} className="u-icon"/><div><b>Heos Flon</b><span>New kitten pics</span></div></div>
              <div className="mini-post"><User size={16} className="u-icon"/><div><b>Pad Piintarr</b><span>Help needed</span></div></div>
            </div>
          </div>
        </div>
      </div>

      {selectedDisc && <DiscussionModal data={selectedDisc} onClose={() => setSelectedDisc(null)} />}
      
     
      {showNewPost && (
        <NewDiscussionModal 
          onClose={() => setShowNewPost(false)} 
          onSubmit={handleAddPost} 
        />
      )}

    </div>
  );
};

export default Community;