"use client"

import EventImageCarousel from "../component/EventImageCarousel";
import ImageCarousel from "../component/ImageCarousel";
import TextCarousel from "../component/TextCarousel";



function Events() {

 

   
  
 
    return ( <div className='container2'><div className="eventContainer">
         <ImageCarousel/>
    </div>
      
      
       <div className="eventContainer"><div className="eventContainerTextCarousel"><TextCarousel/></div><div className="eventContainerEventImageCarousel"><EventImageCarousel/></div></div>

      
    </div> );
}

export default Events;