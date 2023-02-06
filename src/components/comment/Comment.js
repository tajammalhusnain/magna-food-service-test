import React from 'react'

//styles
import useStyles from "./styles";
import { Typography } from '@material-ui/core';

function Comment({ userName, comment }) {
    var classes = useStyles();

    return (
        <div className={classes.commentWrapper}>
            <Typography className={classes.commentUserName}>{userName}</Typography>
            <Typography className={classes.comment}>{comment}</Typography>
        </div>
    )
}

export default Comment