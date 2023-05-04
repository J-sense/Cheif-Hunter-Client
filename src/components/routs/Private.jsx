import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const location = useLocation();
    const {user,loading } =useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>;
    }
    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={{from : location}}></Navigate>;
};

export default Private;