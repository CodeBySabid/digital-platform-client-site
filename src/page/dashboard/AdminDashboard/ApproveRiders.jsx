import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from 'sweetalert2';


const ApproveRiders = () => {
    const axiosSecure = UseAxiosSecure();
    const formateDate = (dateString) => {
        return new Date(dateString).toISOString().split('T')[0];
    }
    const { data: riders = [], refetch } = useQuery({
        queryKey: ["riders", 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data
        }
    })

    const updateRidersStatus = (rider, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to ${status} this apply?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${status}`
        })
            .then(result => {
                if (result.isConfirmed) {
                    const updateInfo = { status, email: rider.email }
                    axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
                        .then(res => {
                            if (res.data.modifiedCount) {
                                refetch();
                                Swal.fire({
                                    title: "Success!",
                                    text: `Rider has been ${status}.`,
                                    icon: "success"
                                });
                            }
                        })
                }
            })
    }

    const handleRequsetdelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete this apply?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/riders/${id}`)
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

    return (
        <div>
            <h1 className='text-center text-green-500 mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Approved Riders {riders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Client</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Application Status</th>
                            <th>Work Status</th>
                            <th>Region</th>
                            <th>District</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) =>
                                <tr key={rider._id}>
                                    <th>{index + 1}</th>
                                    <td>{rider.name}</td>
                                    <td>{rider.email}</td>
                                    <td>{formateDate(rider.createAt)}</td>
                                    <td className={`${rider.status === 'Approved' ? 'text-green-600 font-bold' : "text-red-500"}`}>{rider.status}</td>
                                    <td className={`${rider.workStatus === 'Available' ? 'text-green-600 font-bold' : "text-red-500"}`}>{rider.workStatus}</td>
                                    <td>{rider.Region}</td>
                                    <td>{rider.district}</td>
                                    <td>
                                        <button onClick={() => updateRidersStatus(rider, "Approved")} className='btn max-h-6 bg-green-600'><FaUserCheck /></button>
                                        <button onClick={() => updateRidersStatus(rider, "Rejected")} className='btn max-h-6 bg-red-600 mx-1'><IoPersonRemoveSharp /></button>
                                        <button onClick={() => handleRequsetdelete(rider._id)} className='btn max-h-6 bg-red-600'><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;