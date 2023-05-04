import React from 'react';
import { auth } from '../../config/firebase';
import classes from './Account.module.css';

const Account = () => {
  return (
    <div className={classes.account}>
        <h2>User Profile</h2>
        <h3>Email:{auth.currentUser.email}</h3>
    </div>
  )
}

export default Account