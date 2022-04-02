import React, { useState } from 'react';
import { CarouselDataMan } from './CarouselDataMan';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { CarouselSection } from './CarouselStyle'


const CarouselPageMan = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length



    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <>
            <CarouselSection>
                <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide} />

                {CarouselDataMan.map((slide, index) => {
                    return (
                        <div className={ index === current ? 'slide active' : 'slide'} key={index} >
                            { index === current && <img src={slide.image} alt="/" className='image' /> }
                            
                        </div>

                    )
                })}
            </CarouselSection>


        </>
    )
}

export default CarouselPageMan