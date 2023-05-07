import classes from './Login.module.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginSlice';
import { taskListActions } from '../../store/taskListSlice';
import { googleProvider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import google from '../../Images/google.png';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setuserName] = useState('');
    const [error,setError] = useState(false);

    const dispatch = useDispatch();

    const registrationHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(response.user, {
                displayName: userName
            });
            
            // dispatch(loginActions.setLogout());
            navigate('/login');
        } catch (error) {
           setError(true);
        }
    }

    const signInWithGoogleHandler = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            // dispatch(loginActions.setLogout());
            dispatch(taskListActions.replace([]));
            // dispatch(loginActions.setLogedIn());
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const goToHomeHandler = () => {
        navigate('/');
    }

    return (
        <div className={classes.main}>
            <div className={classes.loginForm}>
                <div className={classes.icon} onClick={goToHomeHandler}>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>

                <h2>Create your account</h2>
                <form onSubmit={registrationHandler} >
                    <input type="text" placeholder='User Name' onChange={(e) => { setuserName(e.target.value) }} />
                    <input type="email" placeholder='Email address' onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit">Register <i class="fa-solid fa-arrow-right"></i></button>
                    <span>Already have a account? <Link to="/login">Log in</Link></span>

                    <div><hr /></div>

                    <button className={classes.google} onClick={signInWithGoogleHandler}> <img src={google} alt="" /> Continue With Google</button>

                    {error && <p className={classes.error}>Something went wrong. Please check out your Login Credentials</p>}
                </form>
            </div>
        </div>
    );
}
export default Signup;