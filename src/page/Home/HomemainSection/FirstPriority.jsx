import React from 'react';
import heroImage from '../../../assets/Log & icon/location-merchant.png'
import merchant from '../../../assets/Log & icon/be-a-merchant-bg.png'
import customer_top from '../../../assets/Log & icon/customer-top.png'

const FirstPriority = () => {
    return (
        <div>
            <div className=" mt-15 bg-base-100 flex items-center justify-center px-4">
                {/* Banner Container */}
                <div className="w-full relative max-w-6xl rounded-2xl bg-linear-to-r from-[#063B3E] to-[#0A4F52] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <img className='absolute top-0 --tw-translate-x: -50% z-0 max-lg:max-w-[90vw]' src={merchant} alt="" />
                    {/* Left Content */}
                    <div className=" text-white flex-1 pt-5 max-sm:pt-3">
                        <h1 className="text-2xl lg:text-4xl font-bold leading-snug">
                            Merchant and Customer Satisfaction <br />
                            is Our First Priority
                        </h1>

                        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-md">
                            We offer the lowest delivery charge with the highest value along
                            with 100% safety of your product. Pathao courier delivers your
                            parcels in every corner of Bangladesh right on time.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <button className="btn bg-lime-400 text-black hover:bg-lime-500 rounded-full px-6">
                                Become a Merchant
                            </button>

                            <button className="btn btn-outline text-lime-300 border-lime-300 hover:bg-lime-400 hover:text-black rounded-full px-6">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                            src={heroImage}
                            alt="Courier Box"
                            className="max-w-xs md:max-w-sm"
                        />
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-208 p-15 mb-1.5'>
                <img className='w-61 mx-auto h-25' src={customer_top} alt="customer top" />
                <div className='mt-2.5 text-center'>
                    <h1 className='text-2xl font-bold mb-2.5'>What our customers are sayings</h1>
                    <p className='text-sm '>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease !</p>
                </div>
            </div>
        </div>
    );
};

export default FirstPriority;