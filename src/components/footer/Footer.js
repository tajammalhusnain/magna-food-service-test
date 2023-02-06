import React from 'react'

import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    YouTube as YouTubeIcon,
    Pinterest as PinterestIcon,
    Instagram as InstagramIcon,
    Notifications as NotificationsIcon,
    LinkedIn as LinkedInIcon
} from '@material-ui/icons';

//styles
import useStyles from "./styles";
import { Typography } from '@material-ui/core';

function Footer() {
    var classes = useStyles();

    return (
        <div className={classes.footerWrapper}>
            <div className={classes.footerSection}>
                <div className={classes.footerIconSection}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                    <NotificationsIcon />
                    <LinkedInIcon />
                </div>
                <Typography className={classes.copyRightText}>© 2017 - 2021 Magna Foodservice Ltd. All Rights Reserved.</Typography>
            </div>
        </div>
    )
}

export default Footer