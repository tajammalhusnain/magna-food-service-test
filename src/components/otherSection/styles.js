import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    otherWrapper: {
        display: "flex",
        flexDirection: 'column',
    },
    sectionTitle: {
        fontSize: '15px',
        fontWeight: 600
    },
    sectionList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        textAlign: 'left',
        "& li": {
            fontSize: '14px',
            padding: '6px 0',
            fontWeight: 'normal'
        }
    }
}))