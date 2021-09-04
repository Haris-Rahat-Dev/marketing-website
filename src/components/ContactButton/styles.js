import { makeStyles } from "@material-ui/styles";

export default makeStyles(()=>({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2rem'
    },
    button: {
        width: '15rem',
        height: '4rem',
        fontWeight: 'bolder'
    }
}));