import React, { useState } from "react";
import { Data } from "./components/Data";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core/styles";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import TextBox from "./components/TextBox";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: 'gray',
    width: '100vw'
  },
  parentBox: {
    display: "flex",
    flexDirection: "row",
    height: "80%",
    // [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'column',
    // },
  },
  imageBox: {
    display: "flex",
    height: "80%",
    width: "70%",
    margin: "2rem",
  },
  textBox: {
    display: "flex",
    height: "80%",
    width: "30%",
    margin: "2rem",
  },
  arrowBox: {
    display: "flex",
    //height: "20%",
    flexDirection: "row-reverse",
    margin: "2rem",
  },
});

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

  console.log(currentIndex);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div>
      {Data.map((item, index) => {
        return (
          <>
            <div className={styles.root}>
              {index === currentIndex && (
                <div>
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
