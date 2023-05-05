import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (user) {
        return children;
    }
    if (loading) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default Private;