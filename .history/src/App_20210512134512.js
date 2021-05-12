import React, { useState } from "react";
import { Data } from "./components/Data";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core/styles";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import TextBox from './components/TextBox';

const useStyles = makeStyles({
  root: {
    display: "flex",
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
    height: "20%",
    flexDirection: "row",
    justifyContent: "row-reverse",
  },
});

function App() {
  const styles = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Data.length;

  return (
    <div>
      {Data.map((item, index) => {
        return (
          <>
            <div
              style={{ display: "flex", flexDirection: "row", height: "80%" }}
            >
              <div className={styles.imageBox}>
                <Background url={item.image} />
              </div>
              <div className={styles.textBox}>
                <TextBox text={item.text} />
              </div>
            </div>
            <div className={styles.arrowBox}>
              <LeftArrow />
              <RightArrow />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
