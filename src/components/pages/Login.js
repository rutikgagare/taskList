import React, { useState } from 'react';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginSlice';
import { taskListActions } from '../../store/taskListSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            dispatch(loginActions.setLogout());
            dispatch(taskListActions.replace([]));
            dispatch(loginActions.setLogedIn());
            navigate('/');

        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <div className={classes.main}>
            <div className={classes.loginForm}>
                <h2>Login</h2>
                <form onSubmit={loginHandler} >
                    <input type="email" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />

                    <button type="submit">Login</button>
                    <span><Link to="/register">Don't have a Account?</Link></span>
                </form>
            </div>
        </div>)
}
export default Login;