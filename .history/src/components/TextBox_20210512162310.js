import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    height: '80vh',
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    }
  }
}));

const TextBox = ({ text }) => {
  const styles = useStyles();

  return (
    <div className={styles.box}>
      <h2>{text}</h2>
    </div>
  );
};

export default TextBox;
