import React from 'react'

//styles
import useStyles from './styles';

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.navBarContainer}>
            <ul>
                <li>Main Menu</li>
                <li>Information</li>
                <li>Food Blog</li>
                <li>Social Feed</li>
                <li>Latest News</li>
                <li>Kitchen Stories</li>
                <li>Best Sellers</li>
            </ul>
        </div>
    )
}

export default NavBar