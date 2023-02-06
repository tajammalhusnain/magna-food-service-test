import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    trendWrapper: {
        display: 'flex',
        marginTop: '18px'
    },
    trendNumber: {
        fontSize: "16px",
        fontWeight: 400,
        color: '#CCCCCC',
        opacity: '0.2px'
    },
    trendInfo: {
        paddingLeft: '10%'
    },
    trendTitle: {
        fontSize: "14px",
        fontWeight: 600,
        color: '#606060'
    },
    trendWritter: {
        fontSize: "12px",
        fontWeight: 600,
        color: '#606060'
    },
    trendDateTime: {
        fontSize: "10px",
        fontWeight: 600,
        color: '#D9D9D9'
    },
}))