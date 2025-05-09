import React from 'react'
import Image from "next/image";
import JobsImage from "../assets/MIDA-Advertisement-2025.jpg";


function Jobs() {
  return (
    <div className='container2'>
     <Image
                    src={JobsImage}
                    alt={``}
                    height={0}
                    width={0}
                    
                    // Fills the parent container
            objectFit="cover"// Set appropriate height
                    layout="responsive" // Ensures responsive image handling
                     // Preload the active image
                  />
    </div>
  )
}

export default Jobs

