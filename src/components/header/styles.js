import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    headerContainer: {
        // width: '100%',
        padding: '10px 8%',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '15% 60% 25%',
        backgroundColor: '#ffffff',
    },
    appLogo: {
        height: '55px'
    },
    searchContainer: {
        display: 'flex',
    },
    userContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}))
