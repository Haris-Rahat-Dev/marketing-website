import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {Button, TextField, InputLabel, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const SignUpForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [complete, setComplete] = useState(false);
    const [user, setUser] = useState('');

    const classes = useStyles();

    const Misc = ({ user }) => {
        return (
            <>
                <Typography variant="h5" className={classes.text} align="center" gutterBottom>Thanks for Signing Up <br/>{ user }</Typography>
            </>
        );
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setComplete(true);
        setUser(name);
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <div className={classes.container}>
               <div className={classes.form}>
                   <Typography variant="h5" align="center" gutterBottom>Sign Up</Typography>
                   <form action="" onSubmit={(e)=>handleSubmit(e)}>
                       <InputLabel>Name:</InputLabel>
                       <TextField className={classes.input} value={name} onChange={(e)=> setName(e.target.value)} fullWidth/>
                       <InputLabel>Email:</InputLabel>
                       <TextField className={classes.input} value={email} fullWidth onChange={(e)=> setEmail(e.target.value)}/>
                       <InputLabel>Password:</InputLabel>
                       <TextField className={classes.input} value={password} type="password" fullWidth onChange={(e)=> setPassword(e.target.value)}/>
                       <Button type="submit" variant="outlined" color="primary" >SignUp!</Button>
                   </form>
                   { complete && <Misc user={ user } /> }
               </div>
                <Button component={Link} to="/" style={{marginTop: '1rem'}} variant="contained" color="primary">Go Back</Button>
            </div>
        </>
    );
};

export default SignUpForm;
