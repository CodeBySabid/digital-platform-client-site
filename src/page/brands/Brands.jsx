import React from 'react';
import './brands.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png';
import amazon_vector from '../../assets/brands/amazon_vector.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';

const Brands = () => {
    return (
        <div>
            <Swiper>
                <SwiperSlide>{amazon}</SwiperSlide>
                <SwiperSlide>{amazon_vector}</SwiperSlide>
                <SwiperSlide>{casio}</SwiperSlide>
                <SwiperSlide>{moonstar}</SwiperSlide>
                <SwiperSlide>{randstad}</SwiperSlide>
                <SwiperSlide>{star}</SwiperSlide>
                <SwiperSlide>{start_people}</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Brands;