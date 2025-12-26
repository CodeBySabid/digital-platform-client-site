import React from 'react';
import HeaderCarousel from '../banner/HeaderCarousel';
import HowWorks from '../Howworks/HowWorks';
import Services from '../HomemainSection/Services';
import Features from '../HomemainSection/Features';
import Brands from '../HomemainSection/Brands';
import FirstPriority from '../HomemainSection/FirstPriority';

const Home = () => {
    return (
        <div>
            <div className='pt-8 max-w-375 mx-auto px-2'>
                <HeaderCarousel></HeaderCarousel>
                <HowWorks></HowWorks>
                <Services></Services>
                <Brands></Brands>
                <Features></Features>
                <FirstPriority></FirstPriority>
            </div>
        </div>
    );
};

export default Home;