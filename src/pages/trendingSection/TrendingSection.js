import React from 'react'

import Trend from '../../components/trend/Trend';

//styles
import useStyles from "./styles";

function TrendingSection() {
    var classes = useStyles();

    return (
        <div className={classes.trendingWrapper}>
            <div className={classes.trendingUpperSection}>
                <div className={classes.trendingLeftSection}>
                    <div className={classes.trendingSectionImage} />
                    <h2 className={classes.trendHeading}>It is a long established fact that a reader will be distracted by the readable content of a page when</h2>
                </div>
                <div className={classes.trendingSection}>
                    <label className={classes.trendingTitle}>Trending</label>
                    <Trend
                        trendNumber='01'
                        writter='Dave Rogers'
                        date='Jun 14'
                        time='3 min ago'
                        title='News needs to meet its Audiences Where They Are '
                    />
                    <Trend
                        trendNumber='02'
                        writter='Dave Rogers'
                        date='Jun 14'
                        time='3 min ago'
                        title='News needs to meet its Audiences Where They Are '
                    />
                    <Trend
                        trendNumber='03'
                        writter='Dave Rogers'
                        date='Jun 14'
                        time='3 min ago'
                        title='News needs to meet its Audiences Where They Are '
                    />
                    <Trend
                        trendNumber='04'
                        writter='Dave Rogers'
                        date='Jun 14'
                        time='3 min ago'
                        title='News needs to meet its Audiences Where They Are '
                    />
                </div>
            </div>
            <p className={classes.trendingText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum. Gravida arcu ac tortor dignissim convallis. Faucibus in ornare quam viverra orci sagittis eu volutpat. Ornare massa eget egestas purus. Ultricies mi eget mauris pharetra et. Amet aliquam id diam maecenas ultricies mi eget mauris. Facilisis sed odio morbi quis. Proin fermentum leo vel orci porta non. Leo urna molestie at elementum eu facilisis. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Aliquet enim tortor at auctor urna nunc id cursus metus. Est sit amet facilisis magna etiam tempor. Amet cursus sit amet dictum sit amet justo. Eget arcu dictum varius duis at consectetur lorem donec massa. In hac habitasse platea dictumst.

                Rhoncus urna neque viverra justo nec ultrices dui sapien. In est ante in nibh mauris cursus mattis molestie a. Gravida quis blandit turpis cursus in. Maecenas sed enim ut sem viverra aliquet eget sit amet. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Aliquam sem et tortor consequat id porta nibh. Lectus quam id leo in vitae turpis. Vulputate odio ut enim blandit volutpat. Velit aliquet sagittis id consectetur. Dui vivamus arcu felis bibendum ut tristique et. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Urna nec tincidunt praesent semper feugiat nibh. Nunc sed blandit libero volutpat sed cras ornare. Erat imperdiet sed euismod nisi porta lorem. Sit amet dictum sit amet justo donec enim. Accumsan lacus vel facilisis volutpat est. Enim eu turpis egestas pretium aenean pharetra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Placerat in egestas erat imperdiet sed euismod nisi porta. In egestas erat imperdiet sed euismod nisi porta lorem mollis.

                Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Nunc sed id semper risus in hendrerit gravida. Leo vel orci porta non. Leo duis ut diam quam nulla porttitor massa. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Vel pretium lectus quam id. Convallis tellus id interdum velit laoreet id donec ultrices. Odio ut sem nulla pharetra diam sit amet. Eu mi bibendum neque egestas congue quisque egestas. Enim nec dui nunc mattis enim. Neque egestas congue quisque egestas diam in arcu. Ut venenatis tellus in metus vulputate. Sed arcu non odio euismod lacinia at quis risus sed.
            </p>
            <div className={classes.socialMediaWrapper}>
                <p className={classes.socialMediaText}>Share on Social Media </p>
                <div className={classes.socialBtn} />
            </div>
        </div >
    )
}

export default TrendingSection