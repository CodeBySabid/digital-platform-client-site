import React from 'react';
import UseAuth from '../../../hooks/UseAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const PaymentHistory = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
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
        })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log(id);
                    axiosSecure.delete(`/payments/${id}`)
                        .then(res => {
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
            })

    }
    console.log(payments)
    return (
        <div>
            <h1 className='text-2xl md:text-4xl text-center mb-10 mt-3.5'>Payment History: {payments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Recipient No</th>
                            <th>Parcel Info</th>
                            <th>Recipient Info</th>
                            <th>Tracking Number</th>
                            <th>Payment Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) =>
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.parcelName}</td>
                                    <td>{payment.parcelName}</td>
                                    <td>{payment?.trackingId}</td>
                                    <td><p className='inline'>$ {payment.amount}</p> ({payment.paymentStatus})</td>
                                    <td>
                                        <button className='btn bg-[#94C6CB]'>View</button>
                                        <button onClick={() => handleDelete(payment._id)} className='btn bg-[#E83330]'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;