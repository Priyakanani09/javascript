import React from 'react'
import Navigation from './Navigation';
import Category from './Category';
import Product from './Product';
import Review from './Review';
import Follow from './Follow';
import Home from './Home';
import Footer from './Footer';

function Webpage() {
    return (
        <div>
            <Navigation />
            <Home />
            <Category />
            <Product />
            <Review />
            <Follow />
            <Footer />
        </div>        
    )
}

export default Webpage;