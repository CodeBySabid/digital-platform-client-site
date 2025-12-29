import React from 'react';
import UseAuth from '../hooks/UseAuth';
import Loading from '../components/Loading/Loading';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user, loading} = UseAuth();
    
    if(loading){
        <Loading></Loading>
    }

    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRouter;