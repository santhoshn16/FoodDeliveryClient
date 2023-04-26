import React from 'react';
import AuthService from '../services/auth.service';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../common/Contect";
const Logout = () => {
    const navigate = useNavigate();
    const { setCurrentUser, currentUser } = useContext(MyContext);
    useEffect(() => {
        setTimeout(() => {
            AuthService.logout();
            setCurrentUser(undefined);
            navigate('/login');
        }, 3000);
    }, [navigate, setCurrentUser]);

    return <div>User Successfully Logged Out</div>;
};


export default Logout;