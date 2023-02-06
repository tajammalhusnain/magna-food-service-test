import React from 'react'
import { InputBase } from '@material-ui/core';

import useStyles from "./styles";
function InputBaseField({ id, name, value, type, isDisabled, placeholder, onChange, ...props }) {

    var classes = useStyles();

    const onChangeEvent = (event) => {
        onChange(event);
    };

    return (
        <InputBase
            id={id}
            className={classes.baseInput}
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={onChangeEvent}
            disabled={isDisabled}
            {...props}
        />

    );
}

export { InputBaseField }