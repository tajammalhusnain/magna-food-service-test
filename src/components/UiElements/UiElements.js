import React from 'react';
import { Badge, Button, Typography } from '@material-ui/core';

//styles
import useStyles from "./styles";

function FormBtn({ id, btnType, onClick, size, children, disabled, ...props }) {
    var classes = useStyles();

    return (
        <>
            {btnType === "search" ?
                < Button id={id}
                    className={classes.searchBtn}
                    disabled={disabled}
                    onClick={onClick}
                    size={size}
                    {...props}>
                    {children}
                </Button >
                : ''}
        </>
    )
}

const BadgeIcon = ({ title, badgeCount, image }) => {
    var classes = useStyles();

    return <div className={classes.badgeWrapper}>
        <Badge badgeContent={badgeCount} color="primary">
            <img src={image} alt="icon" />
        </Badge>
        <Typography>{title}</Typography>
    </div>
}

export { FormBtn, BadgeIcon }