import React from 'react';
import {Typography} from "@material-ui/core";
import useStyles from './styles';

const Text = () => {

    const classes = useStyles();

    return (
        <>
           <div className={classes.container}>
               <Typography variant={"h5"} className={classes.text}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deleniti exercitationem labore ratione veritatis voluptatem voluptatum! Ab adipisci, cupiditate dolor eius, eos fugiat minima rem repellendus totam voluptas voluptatem!
               </Typography>
           </div>
        </>
    );
};

export default Text;
