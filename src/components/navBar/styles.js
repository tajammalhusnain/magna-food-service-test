import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    navBarContainer: {
        // height: '35px',
        padding: '10px 8%',
        backgroundColor: '#E5E6E8',
        "& ul": {
            listStyle: 'none',
            padding: '0',
            margin: '0',
            display: 'flex',
            justifyContent: 'space-around',
            "& li": {
                color: '#363636',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                textTransform: 'upperCase'
            }
        }
    },
}))
