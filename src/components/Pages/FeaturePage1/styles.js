import {makeStyles} from "@material-ui/styles";

export default makeStyles(()=>({
    container: {
        height: '84vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button:{
        marginTop: '3rem',
        marginLeft: '5rem'
    },
    text: {
        width: '25rem',
        wordBreak: 'break-all'
    },
    color: {
        backgroundColor: '#eee'
    }
}));