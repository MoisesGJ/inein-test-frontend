import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8000/api';

const register = (username, email, password) => {
    return axios.post(`${API_URL}/register`, {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    return axios.post(`${API_URL}/login`, {
        email: username,
        password
    });
};


const logout = (token) => {
    return axios.post(
        `${API_URL}/logout`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
};


const authApi = {
    register,
    login,
    logout
};

export default authApi;