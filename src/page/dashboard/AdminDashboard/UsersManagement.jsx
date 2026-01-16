import React from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";



const UsersManagement = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: (async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        })
    })

    const handleMakeUser = (id, role, name) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make ${name} an ${role}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes i agree!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    const roleInfo = {role};
                    axiosSecure.patch(`/users/${id}/role`, roleInfo)
                        .then(res => {
                            if(res.data.modifiedCount){
                                refetch();
                                Swal.fire({
                                title: "Success!",
                                text: `${name} has been successfully made an ${role}.`,
                                icon: "success"
                            });
                            }
                        })
                }
            })
    }

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
            if(result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deleteCount) {
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
            <h2 className='text-4xl'>Manage Users{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user.role === "user" ? <button onClick={() => handleMakeUser(user._id, 'Admin', user.name)} className='btn bg-green-400'><FaUserShield size={20}></FaUserShield></button> : <button onClick={() => handleMakeUser(user._id, 'user', user.name)} className='btn bg-red-300'><FiShieldOff size={20}></FiShieldOff></button>
                                    }
                                    <button onClick={() => deleteUser(user._id)} className='mx-1 btn bg-red-500'><MdDeleteForever size={20} /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;