import { makeStyles } from "@material-ui/core";
import FoodImage from '../../assets/images/food.jpg';

export default makeStyles(() => ({
    newLetterWrapper: {
        height: '150px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: '0.8',
        backgroundImage: `url(${FoodImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    newLetterSection: {
        display: 'flex',
        width: '40%',
        flexDirection: 'column'
    },
    inputSection: {
        width: '100%',
        display: 'flex'
    },
    newLetterTitle: {
        textAlign: 'left',
        fontSize: "16px",
        fontWeight: 600,
        color: '#fff'
    },
    lowerNewsLetteSection: {
        display: "flex",
        justifyContent: 'space-around',
        padding: '50px 14%'

    }
}))