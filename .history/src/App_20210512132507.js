import React, { useState } from 'react';
import {Data} from './components/Data'; 
import Background from './components/Background';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Data.length;

  return (
    <div>
      {Data.map((item, index) => {
        return (
          <div style={{display: 'flex'}}>
          <div>
            <Background url={item.image} />
          </div>
          <div>

          </div>
          </div>
        )
      })}
    </div>
  )
}

export default App;
