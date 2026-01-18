import React from 'react';
import { TbShip } from 'react-icons/tb';
import UseAuth from '../../../hooks/UseAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })

    const {data: payment = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handlePayment = async(parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId : parcel._id,
            senderEmail: parcel.SenderEmail,
            parcelName: parcel.parcelName,
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);
        console.log(res.data.url);
        window.location.href = res.data.url;
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center p-1 sm:p-4'>
            <div className='w-full p-4 md:p-8 bg-base-200 rounded-2xl flex flex-col gap-4'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>All Deliveries</h1>
                <div className='max-w-300'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6'>
                        <div className='bg-base-300 p-6 flex gap-2.5 rounded-3xl'>
                            <div className='w-12 h-12 border flex justify-center items-center rounded-full'>
                                <TbShip size={28} />
                            </div>
                            <div>
                                <h3>Total</h3>
                                <h2 className='text-3xl font-bold'>{parcels.length}</h2>
                            </div>
                        </div>
                        <div className='bg-base-300 p-6 flex gap-2.5 rounded-3xl'>
                            <div className='w-12 h-12 border flex justify-center items-center rounded-full'>
                                <TbShip size={28} />
                            </div>
                            <div>
                                <h3>Return</h3>
                                <h2 className='text-3xl font-bold'>{parcels.length}</h2>
                            </div>
                        </div>
                        <div className='bg-base-300 p-6 flex gap-2.5 rounded-3xl'>
                            <div className='w-12 h-12 border flex justify-center items-center rounded-full'>
                                <TbShip size={28} />
                            </div>
                            <div>
                                <h3>Paid Return</h3>
                                <h2 className='text-3xl font-bold'>{payment.length}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Store</th>
                                    <th>Recipient Info</th>
                                    <th>Amount</th>
                                    <th>Payment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    parcels.map((parcel, index) =>
                                        <tr key={parcel._id}>
                                            <th>{index + 1}</th>
                                            <td>{parcel.parcelName}</td>
                                            <td className='flex flex-col'><p>{parcel.SenderName}</p> {parcel.ReceiverRegions} , {parcel.ReceiverDistrict}</td>
                                            <td>{parcel.cost}</td>
                                            <td>{parcel.paymentStatus === 'paid' ? <span className='text-green-900 bg-green-300/70 p-2 rounded'>Paid</span> :
                                                <button onClick={() => handlePayment(parcel)} className='btn bg-[#CAEB66] text-black'>Pay</button>
                                                // <Link to={`/dashboard/payment/${parcel._id}`} className='btn bg-[#CAEB66] text-black'>Pay</Link>
                                            }</td>
                                            <td>
                                                <button className='btn mr-1 bg-[#94C6CB]'>View</button>
                                                <button onClick={() => handleDelete(parcel._id)} className='btn bg-[#E83330]'>Delete</button>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyParcels;