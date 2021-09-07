import {makeStyles} from "@material-ui/styles";

export default makeStyles(()=> ({
    container: {
        height: '94vh',
        backgroundColor: '#eee',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    form: {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        width: '20rem'
    },
    input: {
        marginBottom: '1.5rem',
        marginTop: '1rem'
    },
    text: {
        marginTop: '1rem',
    }
    }));