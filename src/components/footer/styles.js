import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    footerWrapper: {
        height: '100%',
        padding: '25px 0',
        backgroundColor: '#203C87',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footerSection: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    footerIconSection: {
        padding: '25px 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        "& svg": {
            width: '25px',
            height: '25px',
        }
    },
    copyRightText: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#ffffff'
    }
}))