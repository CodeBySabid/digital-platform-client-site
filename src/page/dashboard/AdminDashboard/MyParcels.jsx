import React from 'react';
import { useQuery } from '@tanstack/react-query'
import UseAuth from '../../../hooks/UseAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { TbEdit } from "react-icons/tb";

const MyParcels = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: parcels = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/parcels?.email${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Weight</th>
                            <th>Shipper</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) =>
                                <tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td>{parcel.SenderName}</td>
                                    <td>{parcel.createAt}</td>
                                    <td>{parcel.ParcelWeight}</td>
                                    <td>Pathao</td>
                                    <td>{parcel.cost}</td>
                                    <td>Delivered</td>
                                    <td><TbEdit /> Edit </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;