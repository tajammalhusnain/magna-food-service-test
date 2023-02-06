import { Typography } from '@material-ui/core'
import React from 'react'

//styles
import useStyles from "./styles";

function Trend({ trendNumber, title, writter, date, time }) {
    var classes = useStyles();

    return (
        <div className={classes.trendWrapper}>
            <Typography className={classes.trendNumber}>{trendNumber}</Typography>
            <div className={classes.trendInfo}>
                <Typography className={classes.trendTitle}>{title}</Typography>
                <Typography className={classes.trendWritter}>{writter}</Typography>
                <Typography className={classes.trendDateTime}>{`${date} . ${time}`}</Typography>
            </div>

        </div>
    )
}

export default Trend