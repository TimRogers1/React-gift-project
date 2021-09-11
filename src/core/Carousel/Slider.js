

import React, { useEffect, useState } from 'react'
import Arrows from './Arrows';
import Dot from './Dot';
import  imageSlider  from './imageSlider';
import SliderContent from './SliderContent';
import './Slider.css';

const len = imageSlider.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
            <Arrows 
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
                />
                <Dot 
                    activeIndex={activeIndex} 
                    imageSlider={imageSlider} 
                    onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider




