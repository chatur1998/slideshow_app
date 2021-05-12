import React, { useState } from "react";
import { Data } from "./components/Data";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core/styles";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import TextBox from "./components/TextBox";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Audio from "./components/Audio";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "95vw",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  parentBox: {
    display: "flex",
    flexDirection: "row",
    height: "80%",
    position: 'absolute',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "90vh",
    },
  },
  imageBox: {
    display: "flex",
    margin: "1rem",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "70%",
    },
  },
  textBox: {
    display: "flex",
    margin: "1rem",
    backgroundColor: "gray",
    width: "30%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "30%",
    },
  },
  arrowBox: {
    display: "flex",
    flexDirection: "row-reverse",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
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
    console.log("next pressed");
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
            <div>
              {index === currentIndex && (
                <div style={{ width: "100vw" }}>
                  <Audio url={item.audio} />
                  {isMobile ? (
                    <div className={styles.parentBox}>
                      <div className={styles.imageBox}>
                        <Background url={item.image} />
                      </div>
                      <div className={styles.textBox}>
                        <TextBox text={item.text} />
                      </div>
                    </div>
                  ) : (
                    <div className={styles.parentBox}>
                      <div className={styles.textBox}>
                        <TextBox text={item.text} />
                      </div>
                      <div className={styles.imageBox}>
                        <Background url={item.image} />
                      </div>
                    </div>
                  )}
                  <div className={styles.arrowBox}>
                    <RightArrow nextSlide={nextSlide} />
                    <LeftArrow prevSlide={prevSlide} />
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
