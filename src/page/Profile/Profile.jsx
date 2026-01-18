import React from 'react';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../hooks/UseAuth';

const Profile = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth();
    const {data: users = []} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: (async() => {
            const result = await axiosSecure.get(`/users/${user.email}`)
            return result.data
        })
    })
    return (
        <div>
            <div>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-r/hsl from-indigo-500 to-teal-400 px-4">
                <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 text-center">

                    {/* Profile Image */}
                    <div className="flex justify-center -mt-20 mb-2">
                        <img
                            src={users?.photoURL}
                            alt="profile"
                            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
                        />
                    </div>

                    <h1 className="text-2xl border-b border-dashed pb-2 border-b-gray-700 font-semibold text-gray-800">
                         {users.name}
                    </h1>

                    <div className='full text-gray-800 flex justify-between'>
                        <h1 className='font-semibold'>Email</h1>
                        <h1>{users.email}</h1>
                    </div>
                    <div className='full text-gray-800 flex justify-between'>
                        <h1 className='font-semibold'>Role</h1>
                        <h1>{users.role}</h1>
                    </div>

                    <div className='full text-gray-800 flex justify-between'>
                        <h1 className='font-semibold'>Created At</h1>
                        <h1>{users.createdAt}</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;