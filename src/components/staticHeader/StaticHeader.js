import React from 'react'

//styles
import useStyles from './styles';
function StaticHeader() {
    const classes = useStyles();
    return (
        <div className={classes.staticHeaderContainer}>
            <div className={classes.staticHeaderFoodSetion}>
                <label>Food Blogs</label>|
                <label>Inspiration</label>|
                <label>Kitchen Stories</label>|
                <label>News</label>
            </div>
            <div className={classes.staticHeaderAccountSetion}>
                <div className={classes.staticHeaderLoginSection}>
                    <label>Login / Register</label>|
                    <label>My Account</label>
                </div>
                <div className={classes.staticHeaderLoginSection}>
                    <label>Help</label>|
                    <label>Contact Us</label>
                </div>
            </div>
        </div>
    )
}

export default StaticHeader