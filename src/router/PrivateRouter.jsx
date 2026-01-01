import React from 'react';
import UseAuth from '../hooks/UseAuth';
import Loading from '../components/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    
    if(loading){
        <Loading></Loading>
    }

    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRouter;