import React, { useState } from 'react';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginSlice';
import { taskListActions } from '../../store/taskListSlice';
import { googleProvider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import google from '../../Images/google.png';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            // console.log(response);
            dispatch(loginActions.setLogout());
            dispatch(taskListActions.replace([]));
            dispatch(loginActions.setLogedIn());
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    const goToHomeHandler = () => {
        navigate('/');
    }

    const signInWithGoogleHandler = async () => {
        try{

            await signInWithPopup(auth,googleProvider);
            dispatch(loginActions.setLogout());
            dispatch(taskListActions.replace([]));
            dispatch(loginActions.setLogedIn());
            navigate('/');
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className={classes.main}>

            <div className={classes.loginForm}>
                <div className={classes.icon} onClick={goToHomeHandler}>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>

                <h2>Welcome back</h2>
                <form onSubmit={loginHandler} >
                    <input type="email" placeholder='Email address' onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />

                    <button type="submit">Login <i class="fa-solid fa-arrow-right"></i></button>
                    <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
                     <button className={classes.google} onClick={signInWithGoogleHandler}> <img src={google} alt=""/> Continue With Google</button>
                </form>
            </div>

        </div>)
}
export default Login;