import React from 'react';
import safe_delivery from '../../../assets/Log & icon/safe-delivery.png';
import Transit_warehouse from '../../../assets/Log & icon/Transit warehouse.png';
import customer_top from '../../../assets/Log & icon/customer-top.png'

const Features = () => {
        const features = [
        {
            title: "Live Parcel Tracking",
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: Transit_warehouse
        },
        {
            title: "100% Safe Delivery",
            desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safe_delivery
        },
        {
            title: "24/7 Call Center Support",
            desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: customer_top
        }
    ];
    
    document.documentElement.classList.toggle('dark');

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 
                                   flex flex-col sm:flex-row items-start sm:items-center gap-6 
                                   shadow-sm dark:shadow-none"
                    >
                        {/* Image */}
                        <div className="w-24 sm:w-28 md:w-32 shrink-0 mx-auto sm:mx-0">
                            <img
                                src={item.image}
                                alt=""
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block h-24 border-l-2 border-dashed 
                                        border-gray-300 dark:border-gray-600"></div>

                        {/* Content */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold 
                                           text-gray-800 dark:text-gray-100">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 
                                          leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;