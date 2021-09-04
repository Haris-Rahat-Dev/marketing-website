import React from 'react';
import useStyles from './styles';
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";

const ContactButton = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button variant={"contained"} className={classes.button} size={"large"} color={"primary"} component={Link} to="/form" >Contact Us</Button>
        </div>
    );
};

export default ContactButton;
