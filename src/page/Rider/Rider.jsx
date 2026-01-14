import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import riderImage from '../../assets/Log & icon/agent-pending.png'
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import UseAuth from '../../hooks/UseAuth';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const serviceCenters = useLoaderData()
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const region = [...new Set(regionsDuplicate)];
    const senderRegion = useWatch({ control, name: "Region" })


    const districtByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const handleRiderForm = (data) => {
        axiosSecure.post(`/riders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Your application has been submitted. We will reach to you in 100 days",
                        icon: "success",
                        showCancelButton: false,
                        timer: 2000,
                    });
                }
            })
    }
    return (
        <div className='w-full p-1.5 min-h-screen flex justify-center items-center'>
            <div className='pt-6 px-3 md:p-10 lg:pt-20 lg:px-28 rounded-2xl bg-base-300'>
                <div>
                    <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl mb-1.5 lg:mb-3'>Be a Rider</h1>
                    <p className='max-w-157.25'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <hr className='border-gray-500 mt-5 mb-2.5' />
                </div>
                <div className='flex items-center'>
                    <div className='flex-1'>
                        <h1 className='font-semibold text-2xl'>Tell us about yourself</h1>
                        <form onSubmit={handleSubmit(handleRiderForm)} className='flex flex-col gap-3 mt-3 w-[320px] mx-auto'>
                            {/* Name field */}
                            <div className='flex flex-col'>
                                <label className='label'>Your Name</label>
                                <input {...register('name', { required: true })} defaultValue={user.displayName} name='name' className="outline-none input" placeholder="Your Name" />
                                {errors.name?.type === "required" && <p className='text-red-600/90'>Your Name is require</p>}
                            </div>

                            {/* License Number field */}
                            <div className='flex flex-col'>
                                <label className='label'>Driving License Number</label>
                                <input {...register("license", { required: true })} className="outline-none input" placeholder="Driving License Number" />
                                {
                                    errors.license?.type === 'required' && <p className='text-red-600/90'>Driving License Number is require</p>
                                }
                            </div>

                            {/* Email field */}
                            <div className='flex flex-col'>
                                <label className='label'>Your Email</label>
                                <input {...register("email", { required: true })} defaultValue={user.email} type='email' className="outline-none input" placeholder="Your Email" />
                                {
                                    errors.email?.type === 'required' && <p className='text-red-600/90'>email is require</p>
                                }
                            </div>

                            {/* Your Region field */}
                            <div className='flex flex-col'>
                                <label className='label'>Your Region</label>
                                <select  {...register("Region", { required: true })} className="outline-none select select-bordered">
                                    <option value="">Your Region</option>
                                    {
                                        region.map((r, index) => <option value={r} key={index}>{r}</option>)
                                    }
                                </select>
                                {
                                    errors.Region?.type === 'required' && <p className='text-red-600/90'>Your Region is require</p>
                                }
                            </div>

                            {/* Your District field */}
                            <div className='flex flex-col'>
                                <label className='label'>Your District</label>
                                <select {...register("district", { required: true })} className="outline-none select select-bordered">
                                    <option value="">Your District</option>
                                    {
                                        senderRegion && districtByRegion(senderRegion).map((r, index) => <option value={r} key={index}>{r}</option>)
                                    }
                                </select>
                                {
                                    errors.district?.type === 'required' && <p className='text-red-600/90'>District is require</p>
                                }
                            </div>

                            {/* NID field */}
                            <div className='flex flex-col'>
                                <label className='label'>NID No</label>
                                <input {...register("nid", { required: true })} className="outline-none input" placeholder="NID" />
                                {
                                    errors.nid?.type === 'required' && <p className='text-red-600/90'>NID is require</p>
                                }
                            </div>

                            {/* Phone Number field */}
                            <div className='flex flex-col'>
                                <label className='label'>Phone Number</label>
                                <input {...register("phonenumber", { required: true })} className="outline-none input" placeholder="Phone Number" />
                                {
                                    errors.phonenumber?.type === 'required' && <p className='text-red-600/90'>Phone Number is require</p>
                                }
                            </div>

                            {/* Bike Brand Model and Year field */}
                            <div className='flex flex-col'>
                                <label className='label'>Bike Brand Model and Year</label>
                                <input {...register("bikebrand", { required: true })} className="outline-none input" placeholder="Bike Brand Model and Year" />
                                {
                                    errors.bikebrand?.type === 'required' && <p className='text-red-600/90'>Bike Brand Model and Year is require</p>
                                }
                            </div>

                            {/* Bike Registration Number field */}
                            <div className='flex flex-col'>
                                <label className='label'>Bike Registration Number</label>
                                <input {...register("bikeregistration", { required: true })} className="outline-none input" placeholder="Bike Registration Number" />
                                {
                                    errors.bikeregistration?.type === 'required' && <p className='text-red-600/90'>Bike Registration Number is require</p>
                                }
                            </div>

                            {/* Tell Us About Yourself field */}
                            <div className='flex flex-col'>
                                <label className='label'>Tell Us About Yourself</label>
                                <textarea {...register("yourself", { required: true })}
                                    className="textarea outline-none textarea-bordered md:col-span-2"
                                    placeholder="Tell Us About Yourself"
                                />
                                {
                                    errors.yourself?.type === 'required' && <p className='text-red-600/90'>About Yourself is require</p>
                                }
                            </div>

                            {/* Submit Button */}
                            <button
                                className="btn btn-success md:col-span-2 mt-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className='hidden flex-1 lg:flex w-full h-full justify-center items-start'>
                        <img src={riderImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rider;