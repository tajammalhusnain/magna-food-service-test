import React from 'react'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//styles
import useStyles from "./styles";
import ProductCard from '../../components/productCard/ProductCard';
import { IconButton } from '@material-ui/core';

const topSellingProducts = [
    { title: 'Vestibulum sed arcu non odio euismod lacinia. Amet aliquam id diam maecenas' },
    { title: 'Vestibulum sed arcu non odio euismod lacinia. Amet aliquam id diam maecenas' },
    { title: 'Vestibulum sed arcu non odio euismod lacinia. Amet aliquam id diam maecenas' },
    { title: 'Vestibulum sed arcu non odio euismod lacinia. Amet aliquam id diam maecenas' },
]
function TopSellingProduct() {
    var classes = useStyles();

    return (
        <div className={classes.topSellingProductWrapper}>
            <IconButton aria-label="delete" color="#203C87" className={classes.iconBtn} >
                <ChevronLeftIcon color="#fff" />
            </IconButton>
            {
                topSellingProducts.map((item, i) => {
                    return (
                        <ProductCard title='Vestibulum sed arcu non odio euismod lacinia. Amet aliquam id diam maecenas' />
                    )
                })
            }
            <IconButton aria-label="delete" color="#203C87" className={classes.iconBtn}>
                <ChevronRightIcon color="#fff" />
            </IconButton>
        </div>
    )
}


export default TopSellingProduct