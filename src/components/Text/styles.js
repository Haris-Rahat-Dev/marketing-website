import { makeStyles } from "@material-ui/styles";

export default makeStyles(()=>({
    container:{
        width:'100%',
        height: '17em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        width: '50rem',
        textAlign: 'justify'
    }
}));