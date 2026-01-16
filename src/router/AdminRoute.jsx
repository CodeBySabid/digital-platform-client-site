import React from 'react';
import UseAuth from '../hooks/UseAuth';
import Loading from '../components/Loading/Loading';
import useRole from '../hooks/useRole';

const AdminRoute = ({ children }) => {
    const { loading } = UseAuth();
    const { role, isLoading } = useRole()

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    console.log(role)

    if (role !== 'Admin') {
        return <div className='w-full min-h-screen flex justify-center items-center'>
            <h1 className='text-5xl text-red-600'>Not allowed</h1>
        </div>
    }

    return children;
};

export default AdminRoute;