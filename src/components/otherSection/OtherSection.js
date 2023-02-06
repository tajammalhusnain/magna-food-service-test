import React from 'react'

//styles
import useStyles from "./styles";

import { Typography } from '@material-ui/core';

function OtherSection({ title, list }) {
    var classes = useStyles();

    return (
        <div className={classes.otherWrapper}>
            <Typography className={classes.sectionTitle}>{title}</Typography>
            <ul className={classes.sectionList}>{
                list.map((lst, index) => {
                    return <li>{lst.title}</li>
                })
            }
            </ul>
        </div>
    )
}

export default OtherSection