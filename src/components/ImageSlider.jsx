import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const ImageSlider = ({ images }) => {
    return (
        <Carousel 
            showStatus={false} 
            showThumbs={false} 
            infiniteLoop  
            renderIndicator={false}
        >
            {images.map(image => (
                <div key={image}>
                    <img src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                         alt={image}
                         className='w-full '
                    />
                </div>
            ))}
        </Carousel>
    )
}




export default ImageSlider