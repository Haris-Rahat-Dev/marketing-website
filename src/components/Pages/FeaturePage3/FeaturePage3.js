import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from "../FeaturePage3/styles";

const Feature3 = () => {

    const classes = useStyles();
    return (
        <div className={classes.color}>
            <div>
                <Button className={classes.button} component={Link} to="/" color="secondary" variant="contained">Back</Button>
            </div>
            <div className={classes.container}>
                <div>
                    <img src="https://via.placeholder.com/600x500" alt=""/>
                </div>
                <div>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit magnam placeat similique suscipit voluptate, voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, saepe?</p>
                </div>
            </div>
        </div>
    );
};

export default Feature3;
