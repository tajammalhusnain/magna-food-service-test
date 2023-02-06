import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    trendingWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 12% 0'
    },
    trendingUpperSection: {
        display: 'flex'
    },
    trendingLeftSection: {
        width: '70%',
    },
    trendingSectionImage: {
        height: '350px',
        backgroundColor: "#5C5C5C"
    },
    trendHeading: {
        textAlign: 'left',
        color: '#1C1C1C',
        margin: '4px 0'
    },
    trendingSection: {
        marginLeft: '6%',
        textAlign: 'left'
    },
    trendingTitle: {
        fontSize: "14px",
        fontWeight: 600,
        marginBottom: '40px !important',
        borderBottom: '3px solid #A8A8A8'
    },
    trendingText: {
        fontSize: '12px',
        color: '#1C1C1C',
        margin: '6px 0',
        textAlign: 'left',
        fontWeight: 600
    },
    socialMediaWrapper: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0',
    },
    socialMediaText: {
        fontSize: '14px',
        fontWeight: 600,
    },
    socialBtn: {
        height: '25px',
        width: '100px',
        marginLeft: "15px",
        backgroundColor: '#5C5C5C'
    }
}))