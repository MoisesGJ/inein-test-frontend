import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout()
        localStorage.clear();
        navigate('/login');
    }, [logout, navigate]);

    return (
        <div>
            <h1>Cargando...</h1>
        </div>
    );
};

export default Logout;
