import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const FAQ = () => {
    return (
        <div>
            <div className="flex items-center text-[#0f3d3e] justify-center px-4 py-16">
                <div className="max-w-7xl w-full">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#5a52c9]">
                            Frequently Asked Question (FAQ)
                        </h2>
                        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                            Achieve proper alignment, reduce pain, and strengthen your body with ease!
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {/* Active FAQ */}
                        <div className="collapse collapse-arrow bg-[#e9f6f7] border border-[#8fd0d6] rounded-xl">
                            <input type="radio" name="faq" defaultChecked />
                            <div className="collapse-title font-semibold text-[#0f3d3e]">
                                How does this posture corrector work?
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>
                                    A posture corrector works by providing support and gentle alignment
                                    to your shoulders, back, and spine, encouraging you to maintain
                                    proper posture throughout the day.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Item */}
                        <div className="collapse collapse-arrow bg-white rounded-xl shadow-sm">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold">
                                Is it suitable for all ages and body types?
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>
                                    Yes, it is designed to be adjustable and comfortable for most age
                                    groups and body types.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white rounded-xl shadow-sm">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold">
                                Does it really help with back pain and posture improvement?
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>
                                    Regular use can help reduce back pain and gradually improve posture
                                    when combined with healthy movement habits.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white rounded-xl shadow-sm">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold">
                                Does it have smart features like vibration alerts?
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>
                                    Some advanced models include smart vibration alerts to notify you
                                    when your posture needs correction.
                                </p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white rounded-xl shadow-sm">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold">
                                How will I be notified when the product is back in stock?
                            </div>
                            <div className="collapse-content text-gray-600">
                                <p>
                                    You can sign up for email notifications and we will inform you once
                                    the product is available again.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center mt-10">
                        <button className="flex items-center gap-3 bg-lime-300 hover:bg-lime-400 text-black font-semibold px-6 py-3 rounded-full">
                            See More FAQ's
                            <span className="bg-black text-white p-2 rounded-full">
                                <FiArrowUpRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FAQ;