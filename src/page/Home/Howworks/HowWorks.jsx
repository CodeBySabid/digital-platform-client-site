import React from 'react';
import bookingIcon from '../../../assets/Log & icon/bookingIcon.png'

const HowWorks = () => {
    const theme = 'light';
    return (
        <div className='py-5 sm:py-10 md:py-16 xl:24 mx-auto max-w-320.5 flex flex-col justify-between'>
            <h1 className='text-3xl font-bold mb-8 max-lg:text-cen'>How it Wirks</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                <div className={`max-w-87.5 rounded-2xl mx-auto ${theme === 'light' ? 'bg-white' : "bg-gray-950"} p-8 flex flex-col gap-2.5 items-start`}>
                    <img className='w-14 h-14' src={bookingIcon} alt="bookingIcon" />
                    <h1 className='text-black font-semibold text-xl'>Booking Pick & Drop</h1>
                    <p className='text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className={`max-w-87.5 rounded-2xl mx-auto ${theme === 'light' ? 'bg-white' : ""} p-8 flex flex-col gap-2.5 items-start`}>
                    <img className='w-14 h-14' src={bookingIcon} alt="bookingIcon" />
                    <h1 className='text-black font-semibold text-xl'>Booking Pick & Drop</h1>
                    <p className='text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className={`max-w-87.5 rounded-2xl mx-auto ${theme === 'light' ? 'bg-white' : ""} p-8 flex flex-col gap-2.5 items-start`}>
                    <img className='w-14 h-14' src={bookingIcon} alt="bookingIcon" />
                    <h1 className='text-black font-semibold text-xl'>Booking Pick & Drop</h1>
                    <p className='text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className={`max-w-87.5 rounded-2xl mx-auto ${theme === 'light' ? 'bg-white' : ""} p-8 flex flex-col gap-2.5 items-start`}>
                    <img className='w-14 h-14' src={bookingIcon} alt="bookingIcon" />
                    <h1 className='text-black font-semibold text-xl'>Booking Pick & Drop</h1>
                    <p className='text-gray-500'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;