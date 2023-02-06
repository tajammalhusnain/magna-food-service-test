import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    commentWrapper: {
        textAlign: 'left',
        display: 'flex',
        marginTop: '10px',
        flexDirection: 'column',
    },
    commentUserName: {
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'upperCase'
    },
    comment: {
        fontSize: '12px',
        fontWeight: 'normal',
    }
}))