

import React from 'react';
import imageSlider from './imageSlider';
import First from '../../assets/img1.jpg';
import Second from '../../assets/img1.jpg';
import Third from '../../assets/img1.jpg';


function SliderContent({ activeIndex, imageSlider }) {

    const data = [
        {
            imageUrl: First
        },
        {
            imageUrl: Second
        },
        {
            imageUrl: Third
        }
    ]

    return (
        <section>
            {data.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.imageUrl} alt=""/>
                </div>
            ))}
        </section>
    )
}

export default SliderContent
