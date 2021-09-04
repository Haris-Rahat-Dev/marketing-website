import React from 'react';
import { Typography } from "@material-ui/core";
import useStyles from './styles';

const Hero = () => {

    const classes = useStyles();

    return (
        <>
         <div className={classes.hero}>
             <Typography className={classes.heroText} variant="h2">Title</Typography>
         </div>
        </>
    );
};

export default Hero;
