import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import useStyles from './styles';

const Features = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div>
                    <Link to="/feature1">
                        <div className={classes.feature}></div>
                        <Button variant="contained" color="secondary" className={classes.button}>Feature 1</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/feature2">
                        <div className={classes.feature}></div>
                        <Button variant="contained" color="secondary" className={classes.button}>Feature 2</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/feature3">
                        <div className={classes.feature}></div>
                        <Button variant="contained" color="secondary" className={classes.button}>Feature 3</Button>
                    </Link>
                </div>
            </div>
            <h2 className={classes.bottomText}>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
        </>
    );
};

export default Features;
