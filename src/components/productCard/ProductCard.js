import React from 'react'

import { Typography } from '@material-ui/core';

//styles
import useStyles from "./style";

function ProductCard({ title }) {
    var classes = useStyles();

    return (
        <div className={classes.productCardWrapper}>
            <div className={classes.imageSection}></div>
            <div className={classes.titleWrapper}>
                <Typography className={classes.titleTitle}>{title}</Typography>

            </div>
        </div>
    )
}

export default ProductCard