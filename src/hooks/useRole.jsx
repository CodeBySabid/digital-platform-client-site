import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';

const useRole = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { isLoading, data: role = 'user' } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: (async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data
        })
    })
    return { role, isLoading };
};

export default useRole;