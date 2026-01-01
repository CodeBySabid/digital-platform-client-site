import React from 'react';

const SendParcel = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="w-full max-w-5xl bg-base-300 rounded-xl shadow-md p-8">
                    <h1 className="text-2xl font-bold mb-1">
                        Send A Parcel
                    </h1>
                    <p className="text-sm text-gray-500 mb-3">
                        Enter your parcel details
                    </p>

                    <hr className='border-gray-500 mb-2' />

                    {/* Document Type */}
                    <div className="flex gap-6 mb-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="type" defaultChecked />
                            <span className="text-sm">Document</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="type" />
                            <span className="text-sm">Non-Document</span>
                        </label>
                    </div>

                    {/* Parcel Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                        <div>
                            <label className='label'>Parcel Name</label>
                            <input
                                type="text"
                                placeholder="Parcel Name"
                                className="input"
                            />
                        </div>
                        <div>
                            <label className='label'>Parcel Weight (KG)</label>
                            <input
                                type="number"
                                placeholder="Parcel Weight (KG)"
                                className="input"
                            />
                        </div>
                    </div>
                    <hr className='mb-3 border-gray-300'/>

                    {/* Sender & Receiver */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Sender */}
                        <div>
                            <h3 className="font-semibold mb-4">Sender Details</h3>
                            <div className="space-y-3">
                                <div>
                                    <label>Sender Name</label>
                                <input className="input" placeholder="Sender Name" />
                                </div>
                                <div>
<label className='label'></label>
                                <input className="input" placeholder="Address" />
                                </div>
                                <input className="input" placeholder="Sender Phone No" />
                                <select className="input">
                                    <option>Select your District</option>
                                </select>
                                <textarea
                                    className="input h-24 resize-none"
                                    placeholder="Pickup Instruction"
                                />
                            </div>
                        </div>

                        {/* Receiver */}
                        <div>
                            <h3 className="font-semibold mb-4">Receiver Details</h3>
                            <div className="space-y-3">
                                <input className="input" placeholder="Receiver Name" />
                                <input className="input" placeholder="Address" />
                                <input className="input" placeholder="Receiver Contact No" />
                                <select className="input">
                                    <option>Select your District</option>
                                </select>
                                <textarea
                                    className="input h-24 resize-none"
                                    placeholder="Delivery Instruction"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-xs text-gray-500 mt-6">
                        * Pickup Time 4pm–7pm Approx.
                    </p>

                    <button className="mt-4 bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-md">
                        Proceed to Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendParcel;