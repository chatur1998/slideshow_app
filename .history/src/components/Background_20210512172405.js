import React from 'react';
import Data from './Data';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "flex",
    height: '80vh',
    width: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: '90vh'
    }
  }
}));

const Background = ({url}) => {
  const styles = useStyles();

    return (
        <div>
          <img src={url} className={styles.image} /> 
        </div>
    )
}

export default Background;