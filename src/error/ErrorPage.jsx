import React from 'react';
import errorimage from '../../src/assets/Log & icon/Error image.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='w-full mt-3.5 flex items-center justify-center'>
            <div className=' bg-base-100 w-[95%] h-[80vh] rounded-3xl'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='relative pb-30 flex justify-center items-center'>
                        <img src={errorimage} alt="" />
                        <div className='absolute text-center bottom-20'>
                            <h1 className='font-bold text-5xl pb-15'>Error 404</h1>
                            <Link to={'/'} className=' text-[#606060] rounded-4xl bg-[#CAEB66] py-3 px-12 font-semibold'>Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;