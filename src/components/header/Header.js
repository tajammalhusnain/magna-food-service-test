import React from 'react'

//images
import AppLogo from '../../assets/images/app-logo.jpg';
import UserIcon from '../../assets/images/user.png';
import BasketIcon from '../../assets/images/cart.png';
import FavoriteIcon from '../../assets/images/favorite.png';

//custom components
import StaticHeader from '../staticHeader/StaticHeader';
import { BadgeIcon, FormBtn } from '../../components/UiElements/UiElements';
import { InputBaseField } from '../inputField/InputField';

//styles
import useStyles from './styles';

function Header() {
    const classes = useStyles();
    return (
        <>
            <StaticHeader />
            <div className={classes.headerContainer}>
                <img src={AppLogo} alt="logo" className={classes.appLogo} />
                <div className={classes.searchContainer}>
                    <InputBaseField placeholder='Search product or brand' />
                    <FormBtn id="search" btnType="search">Search</FormBtn>
                </div>
                <div className={classes.userContainer}>
                    <BadgeIcon title="Account" image={UserIcon} badgeCount={0} />
                    <BadgeIcon title="Account" image={FavoriteIcon} badgeCount={0} />
                    <BadgeIcon title="Account" image={BasketIcon} badgeCount={2} />
                </div>
            </div>
        </>
    )
}

export default Header