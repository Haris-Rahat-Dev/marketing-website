import React from 'react';
import { Typography } from "@material-ui/core";
import { ShoppingBasketRounded } from '@material-ui/icons';
import useStyles from './styles';


const Footer = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div> © 2020 Coby Fayock</div>
                <div><Typography variant="h6">50 React Projects</Typography></div>
                <div><ShoppingBasketRounded/> 10</div>
            </div>
        </>
    );
};

export default Footer;
