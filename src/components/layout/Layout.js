import React from 'react'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import TrendingSection from '../../pages/trendingSection/TrendingSection';
import CommentSection from '../../pages/commentsSection/CommentSection';
import TopSellingProduct from '../../pages/topSellingProduct/TopSellingProduct';
import NewsLetter from '../../pages/newsLetter/NewsLetter';
import Footer from '../footer/Footer';

function Layout() {
    return (
        <>
            <Header />
            <NavBar />
            <TrendingSection />
            <CommentSection />
            <TopSellingProduct />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Layout