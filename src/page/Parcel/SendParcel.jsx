import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const handleSendParel = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center sm:p-6 p-1">
                <div className="w-full max-w-5xl bg-base-300 rounded-xl shadow-md px-3 py-5 sm:p-8">
                    <h1 className="text-2xl font-bold mb-1">
                        Send A Parcel
                    </h1>
                    <p className="text-sm text-gray-500 mb-3">
                        Enter your parcel details
                    </p>

                    <hr className='border-gray-500 mb-2' />
                    <form onSubmit={handleSubmit(handleSendParel)}>

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
                        <div className="flex flex-col items-center w-full md:flex gap-3 mb-3">
                            <div className="flex flex-col w-full max-w-100">
                                <label className='label'>Parcel Name</label>
                                <input
                                    {...register( "parcelName", {required: true})}
                                    type="text"
                                    placeholder="Parcel Name"
                                    className="input outline-none w-full"
                                />
                                {
                                    errors.parcelName?.type === 'required' && <p className='text-red-600/80 text-sm'>Parcel Name is required</p>
                                }
                            </div>
                            <div className="flex flex-col w-full max-w-100">
                                <label className='label'>Parcel Weight (KG)</label>
                                <input
                                    {...register( "ParcelWeight", {required: true})}
                                    type="number"
                                    placeholder="Parcel Weight (KG)"
                                    className="input outline-none w-full"
                                />
                                {
                                    errors.ParcelWeight?.type === 'required' && <p className='text-red-600/80 text-sm'>Parcel Weight is required</p>
                                }
                            </div>
                        </div>
                        <hr className='mb-3 border-gray-300' />

                        {/* Sender & Receiver */}
                        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-0">
                            {/* Sender */}
                            <div className='max-md:mx-auto w-full max-w-100'>
                                <h3 className="font-semibold mb-4">Sender Details</h3>
                                <div className="space-y-3">
                                    <div className="flex flex-col items-start">
                                        <label>Sender Name</label>
                                        <input
                                    {...register( "SenderName", {required: true})} className="input outline-none w-full" placeholder="Sender Name" />
                                {
                                    errors.SenderName?.type === 'required' && <p className='text-red-600/80 text-sm'>Sender Name is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Address</label>
                                        <input
                                    {...register( "Address", {required: true})} className="input outline-none w-full" placeholder="Address" />
                                {
                                    errors.Address?.type === 'required' && <p className='text-red-600/80 text-sm'>Address is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Sender Phone No</label>
                                        <input
                                    {...register( "SenderPhoneNo", {required: true})} className="input outline-none w-full" placeholder="Sender Phone No" />
                                {
                                    errors.SenderPhoneNo?.type === 'required' && <p className='text-red-600/80 text-sm'>Sender Phone No is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className=''>Select your District</label>
                                        <select
                                    {...register( "SelectyourDistrict", {required: true})} className="input outline-none w-full">
                                            <option value=''>Select your District</option>
                                            <option>Dhaka</option>
                                        </select>
                                {
                                    errors.SelectyourDistrict?.type === 'required' && <p className='text-red-600/80 text-sm'>Select your District is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Pickup Instruction</label>
                                        <textarea
                                    {...register( "PickupInstruction", {required: true})}
                                            className="input outline-none h-24 resize-none w-full"
                                            placeholder="Pickup Instruction"
                                        />
                                {
                                    errors.PickupInstruction?.type === 'required' && <p className='text-red-600/80 text-sm'>Pickup Instruction is required</p>
                                }
                                    </div>
                                </div>
                            </div>

                            {/* Receiver */}
                            <div className='max-md:mx-auto w-full max-w-100'>
                                <h3 className="font-semibold mb-4">Receiver Details</h3>
                                <div className="space-y-3">
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Receiver Name</label>
                                        <input
                                    {...register( "ReceiverName", {required: true})} className="input outline-none w-full" placeholder="Receiver Name" />
                                {
                                    errors.ReceiverName?.type === 'required' && <p className='text-red-600/80 text-sm'>Receiver Name is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Address</label>
                                        <input
                                    {...register( "R_Address", {required: true})} className="input outline-none w-full" placeholder="Address" />
                                {
                                    errors.R_Address?.type === 'required' && <p className='text-red-600/80 text-sm'>Address is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Receiver Contact No</label>
                                        <input
                                    {...register( "ReceiverContact", {required: true})} className="input outline-none w-full" placeholder="Receiver Contact No" />
                                {
                                    errors.ReceiverContact?.type === 'required' && <p className='text-red-600/80 text-sm'>Receiver Contact No is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Select your District</label>
                                        <select
                                    {...register( "SelectDistrict", {required: true})} className="input outline-none w-full">
                                            <option value=''>Select your District</option>
                                            <option>Madaripur</option>
                                        </select>
                                {
                                    errors.SelectDistrict?.type === 'required' && <p className='text-red-600/80 text-sm'>Select your District is required</p>
                                }
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <label className='label'>Delivery Instruction</label>
                                        <textarea
                                    {...register( "DeliveryInstruction", {required: true})}
                                            className="input outline-none h-24 resize-none w-full"
                                            placeholder="Delivery Instruction"
                                        />
                                {
                                    errors.DeliveryInstruction?.type === 'required' && <p className='text-red-600/80 text-sm'>Delivery Instruction is required</p>
                                }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}

                        <div className='w-full md:justify-start flex justify-center'>
                            <button className="mt-4 dm:mx-auto bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-md">
                                Proceed to Confirm Booking
                            </button>
                        </div>
                    </form>
                    <p className="text-xs text-gray-500 mt-6">
                        * Pickup Time 4pm–7pm Approx.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SendParcel;