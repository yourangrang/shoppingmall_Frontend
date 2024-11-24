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
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                hasPrev && (
                    
                    <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-black opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                        onClick={onClickHandler}
                        aria-label={label}
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'black',
                            fontSize: '40px',
                            height: '350px'
                        }}
                    >
                    &lt; 
                    </button>
                )
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
                hasNext && (
                    <button className="  absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-black opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                        onClick={onClickHandler}
                        aria-label={label}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'black',
                            fontSize: '40px',
                            height: '350px'
                        }}
                    >
                    &gt; 
                    </button>
                )
            )}
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