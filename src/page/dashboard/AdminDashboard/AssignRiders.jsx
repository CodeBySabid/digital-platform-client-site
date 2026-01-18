import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const AssignRiders = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: (async () => {
            const res = await axiosSecure.get(`/parcels?deliveryStatus=pending-pickup`)
            return res.data
        })
    })
    return (
        <div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-semibold mt-2 text-center '>Assign Riders {parcels.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Store</th>
                                <th>Sender Info</th>
                                <th>Receiver Info</th>
                                <th>Delivery Status</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Create At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, index) =>
                                    <tr key={parcel._id}>
                                        <th>{index + 1}</th>
                                        <td>{parcel.parcelName}</td>
                                        <td>{parcel.senderRegions} <br /> {parcel.SenderDistrict}</td>
                                        <td>{parcel.ReceiverRegions} <br /> {parcel.ReceiverDistrict}</td>
                                        <td>{parcel.deliveryStatus}</td>
                                        <td>{parcel.cost}</td>
                                        <td>{parcel.paymentStatus === 'paid' ? <span className='text-black font-semibold bg-[#5edb24] p-2 rounded'>Paid</span> :
                                            <button className='btn bg-[#CAEB66] text-black'>Pay</button>
                                        }</td>
                                        <td>{parcel.createAt}</td>
                                        <td className='flex gap-2'>
                                            <button className='btn bg-[#717bd6]'>Assign Rider</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AssignRiders;