import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { authToken } = useContext(AuthContext);

    console.log('authToken:', authToken); // Esto te ayudará a ver si el token está siendo detectado correctamente

    if (!authToken) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
