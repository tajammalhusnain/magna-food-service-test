import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    headerContainer: {
        // height: '80px',
        padding: '10px 8%',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        // "& label": {
        //     fontSize: '14px',
        //     color: '#CCD2E4',
        //     padding: '0 4px'
        // }
    },
    badgeWrapper: {
        "& img": {
            width: '40px',
            height: '40px',
        },
        "& .MuiTypography-body1": {
            fontSize: '8px'
        },
        "& .MuiBadge-anchorOriginTopRightRectangle": {
            top: '2px',
            right: '4px'
        }
    },
    searchBtn: {
        backgroundColor: '#203C87',
        textTransform: 'none',
        borderColor: '#11284b',
        color: 'white',
        marginRight: 8,
        minWidth: 90,
        padding: "6px 16px",
        fontFamily: "Lato",
        height: '35.63px',
        '&:hover': {
            backgroundColor: '#596270',
            borderColor: '#11284b',
            color: 'white',
        },
        "&:disabled": {
            backgroundColor: '#596270',
            borderColor: '#11284b',
            color: 'white',
        },
        // '& .MuiButton-startIcon svg': {
        //   marginLeft: "-10px",
        // }

    },
}))
