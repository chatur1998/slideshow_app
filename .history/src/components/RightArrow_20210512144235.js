import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const RightArrow = ({ index, currentIndex}) => {
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }
    
    return (
        <button style={{justifyContent: 'center', alignItems: 'center'}} onClick={prevSlide}>
            <FaArrowAltCircleRight />
        </button>
    )
}

export default RightArrow;