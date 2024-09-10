"use client"

import EventImageCarousel from "../component/EventImageCarousel";
import ImageCarousel from "../component/ImageCarousel";
import TextCarousel from "../component/TextCarousel";
import ImageGallery from "../data/EventsData.json"



function Events() {

 

   
  
 
    return ( <div className='container2'><div className="eventContainer">
         <ImageCarousel data={ImageGallery.eventGallery} tab={"events"}/>
    </div>
      
      
       <div className="eventContainer"><div className="eventContainerTextCarousel"><TextCarousel/></div><div className="eventContainerEventImageCarousel"><EventImageCarousel/></div></div>

      
    </div> );
}

export default Events;