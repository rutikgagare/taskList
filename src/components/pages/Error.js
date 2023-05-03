import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.error}>
      <div className={classes.errorBox}>
        <h1>Something Went Wrong</h1>
        <Link to="/">Go Back To Home Page</Link>
      </div>  
    </div>
  )
}

export default Error