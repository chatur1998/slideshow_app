import React, { useState } from 'react';
import {Data} from './components/Data'; 
import Background from './components/Background';
import { makeStyles } from '@material-ui/core/styles';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  imageBox: {
    display: 'flex',
    height: '80%',
    width: '70%',
    margin: '2rem'
  },
  textBox: {
    display: 'flex',
    height: '80%',
    width: '30%',
    margin: '2rem'
  }
});


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
