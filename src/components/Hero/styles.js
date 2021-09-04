import { makeStyles } from "@material-ui/styles";

export default makeStyles(()=>({
    hero:{
        maxWidth: '100%',
        height: '25rem',
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heroText:{
        color: 'white',
        fontWeight: 'bold'
    }
}));