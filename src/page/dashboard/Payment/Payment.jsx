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

    console.log(parcel)

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>parcels name : {parcel.parcelName}</h2>
        </div>
    );
};

export default Payment;