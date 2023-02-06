import React, { useState } from 'react'

import { Typography } from '@material-ui/core';

import { FormBtn } from '../../components/UiElements/UiElements';
import { InputBaseField } from '../../components/inputField/InputField';

//styles
import useStyles from "./style";
import OtherSection from '../../components/otherSection/OtherSection';

function NewsLetter() {
    const list1 = [
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
    ]
    const list2 = [
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
    ]
    const list3 = [
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
    ]
    const list4 = [
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
        { title: 'Lorem Ipsum' },
    ]
    var classes = useStyles();

    const [state, setState] = useState({ category: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (<>
        <div className={classes.newLetterWrapper}>
            <div className={classes.newLetterSection}>
                <Typography className={classes.newLetterTitle}>JOIN OUR NEWSLETTER</Typography>
                <Typography className={classes.newLetterTitle}>Subscribe to our newsletter with your email here:</Typography>
                <div className={classes.inputSection}>
                    <InputBaseField
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        placeholder="your email address..."
                    />
                    <FormBtn id='subcribe' btnType='search'>SUBCRIBE</FormBtn>
                </div>
            </div>
        </div>
        <div className={classes.lowerNewsLetteSection}>
            <OtherSection title='Lorem Ipsum' list={list1} />
            <OtherSection title='Lorem Ipsum' list={list2} />
            <OtherSection title='Lorem Ipsum' list={list3} />
            <OtherSection title='Lorem Ipsum' list={list4} />
        </div>
    </>
    )
}

export default NewsLetter