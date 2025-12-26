import React from 'react';
import HeaderCarousel from '../banner/HeaderCarousel';
import HowWorks from '../Howworks/HowWorks';
import Services from '../HomemainSection/Services';
import Brands from '../../brands/Brands';
import Features from '../HomemainSection/Features';

const Home = () => {
    return (
        <div>
            <div className='pt-8 max-w-375 mx-auto px-2'>
                <HeaderCarousel></HeaderCarousel>
                <HowWorks></HowWorks>
                <Services></Services>
                <Brands></Brands>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;