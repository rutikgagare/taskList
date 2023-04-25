import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.error}>
        <h1>Something Went Wrong</h1>
        <Link to="/">Go To Home Page</Link>
    </div>
  )
}

export default Error