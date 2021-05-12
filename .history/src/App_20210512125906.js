import React from 'react';
import Data from './components/Data'; 
import Background from './components/Background';

function App() {
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
