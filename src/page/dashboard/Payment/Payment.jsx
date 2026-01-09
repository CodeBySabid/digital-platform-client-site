import React from 'react';
import UseAuth from '../../../hooks/UseAuth';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Loading from '../../../components/Loading/Loading';

const Payment = () => {
    const {parcelId} = useParams();
    const axiosSecure = UseAxiosSecure();
    const {isLoading, data: parcel} = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    const handlePayment = async() => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.SenderEmail,
            parcelName: parcel.parcelName,
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data)
        window.location.href = res.data.url
    }


    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Please Pay ${parcel.cost} for : {parcel.parcelName}</h2>
            <button onClick={handlePayment} className='btn bg-[#CAEB66] text-black'>Pay</button>
        </div>
    );
};

export default Payment;