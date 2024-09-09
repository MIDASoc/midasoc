"use client"
import { useState, useEffect } from 'react';
import EventsData from '../data/EventsData.json';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
function TextCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current event
    const [fade, setFade] = useState(true); // Track the fade-in/fade-out effect
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // Trigger fade-out
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === EventsData.eventDetails.length - 1 ? 0 : prevIndex + 1
          );
          setFade(true); // Trigger fade-in after the content is updated
        }, 500); // Match this delay with the CSS fade-out duration
      }, 10000); // Transition every 3 seconds
  
      return () => clearInterval(interval);
    }, []);


   
  
    const currentEvent = EventsData.eventDetails[currentIndex];
    return ( 
       
             <div style={{display:"flex", flexDirection:"column", transition:".5s"}}>
              <span style={{textAlign:"left", fontSize:"2rem" , fontWeight:800}}>Event</span>
              <div className={`carousel2 ${fade ? "fadeIn" : "fadeOut"}`}>
                 <div className='eventDetailsContainer'>
                
        <h2>{currentEvent.eventTitle}</h2>
        <p style={{textAlign:"left"}}>{currentEvent.eventDescription}</p>

        <div className='eventDetailsContainerVenue'>
        <span className='textIconContainer'><LocationOnRoundedIcon/>{currentEvent.eventVenue}</span>
        <span className="textIconContainer"><EventRoundedIcon/>{currentEvent.eventDate}</span>
        </div>
      
    

      
    </div>
        </div></div>
            
        );
}

export default TextCarousel;