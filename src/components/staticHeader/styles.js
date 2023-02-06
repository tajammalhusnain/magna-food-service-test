import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    staticHeaderContainer: {
        color: '#CCD2E4',
        height: '35px',
        padding: '0 8%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#203C87',
        "& label": {
            fontSize: '14px',
            color: '#CCD2E4',
            padding: '0 4px'
        }
    },
    staticHeaderFoodSetion: {
        display: 'flex',
        alignItems: 'center',
    },
    staticHeaderAccountSetion: {
        display: 'flex',
        alignItems: 'center',
    },
    staticHeaderLoginSection: {
        display: 'flex',
        alignItems: 'center',
    }
}))