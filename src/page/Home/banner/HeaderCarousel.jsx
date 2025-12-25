import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import card1 from "../../../assets/banner/banner1.png";
import card2 from "../../../assets/banner/banner2.png";
import card3 from "../../../assets/banner/banner3.png";

const HeaderCarousel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img className='w-full' src={card1} />
                </div>
                <div>
                    <img className='w-full' src={card2} />
                </div>
                <div>
                    <img className='w-full' src={card3} />
                </div>
            </Carousel>
        </div>
    );
};

export default HeaderCarousel;