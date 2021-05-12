import React, { useState } from "react";
import { Data } from "./components/Data";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core/styles";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import TextBox from "./components/TextBox";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: '95vw'
  },
  parentBox: {
    display: "flex",
    flexDirection: "row",
    height: "80%",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  imageBox: {
    display: "flex",
    margin: "1rem",
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      //height: '65%'
    },
  },
  textBox: {
    display: "flex",
    margin: "1rem",
    backgroundColor: 'gray',
    width: '30%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      
    },
  },
  arrowBox: {
    display: "flex",
    //height: "20%",
    flexDirection: "row-reverse",
    margin: "1rem",
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  },
}));

function App() {
  const styles = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Data.length;

  if (!Array.isArray(Data) || Data.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    console.log('next pressed')
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className={styles.root}>
      {Data.map((item, index) => {
        return (
          <>
            <div >
              {index === currentIndex && (
                <div style={{width: '100vw'}}>
                  <div className={styles.parentBox}>
                    <div className={styles.textBox}>
                      <TextBox text={item.text} />
                    </div>
                    <div className={styles.imageBox}>
                      <Background url={item.image} />
                    </div>
                  </div>
                  <div className={styles.arrowBox}>
                    <FaArrowAltCircleRight onClick={nextSlide} />
                    <FaArrowAltCircleLeft onClick={prevSlide} />
                  </div>
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
