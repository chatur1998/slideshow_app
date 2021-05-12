import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const LeftArrow = () => {
    return (
        <button style={{justifyContent: 'center', alignItems: 'center', margin: '1rem'}}>
            <FaArrowAltCircleLeft />
        </button>
    )
}

export default LeftArrow;