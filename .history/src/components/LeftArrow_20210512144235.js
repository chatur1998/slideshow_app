import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const LeftArrow = ({ index, currentIndex}) => {
    
    
      console.log(currentIndex)
    
      const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
      }

    return (
        <button style={{justifyContent: 'center', alignItems: 'center'}} onClick={prevSlide}>
            <FaArrowAltCircleLeft />
        </button>
    )
}

export default LeftArrow;