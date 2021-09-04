import { makeStyles } from "@material-ui/styles";

export default makeStyles(()=> ({
    container: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    feature:{
        width:'18rem',
        height: '15rem',
        backgroundColor: 'grey',
        paddingBottom:'2rem'
    },
    bottomText:{
        textAlign: 'center',
        paddingBottom: '2rem'
    },
    button: {
        marginTop: '1.5rem'
    }
}));