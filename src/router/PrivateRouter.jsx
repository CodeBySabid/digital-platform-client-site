import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRouter = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    
    if(loading) {
        return <Loading></Loading>
    }

    if(!user) {
        return(
            <Navigate to={'/login'} replace state={{from: location}}></Navigate>
        )
    }
    return children;
};

export default PrivateRouter;