import React from 'react';
import Data from './Data';

const Background = ({url}) => {
    return (
        <div>
          <img src={url} style={{maxHeight: '80vh', width: '65vw'}} /> 
        </div>
    )
}

export default Background;