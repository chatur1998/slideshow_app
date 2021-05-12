import React, { useState } from 'react';
import {Data} from './components/Data'; 
import Background from './components/Background';
import {FaArrow}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Data.length;

  return (
    <div>
      {Data.map((item, index) => {
        return (
          <div>
            <Background url={item.image} />
          </div>
        )
      })}
    </div>
  )
}

export default App;
