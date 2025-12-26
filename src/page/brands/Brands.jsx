import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import amazon from '../../assets/brands/amazon.png';
import amazon_vector from '../../assets/brands/amazon_vector.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const Brands = () => {
    const brandLogo = [star, amazon_vector, casio, moonstar, randstad, start_people, amazon];
    return (
        <div className='py-25 mx-auto max-w-7xl'>
            <h1 className='text-center font-semibold text-3xl max-md:text-2xl max-sm:text-xl mb-10'>We've helped thousands of sales teams</h1>
            <Swiper
                loop={true}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            // className="mySwiper"
            >
                {
                    brandLogo.map((logo, index) => <SwiperSlide key={index}><img className='h-5' src={logo} alt="" /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Brands;