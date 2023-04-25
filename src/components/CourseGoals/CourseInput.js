import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';
import './CourseInput.css';

const CourseInput = props => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.isLogedIn);

  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }

    console.log(isLogin);

    if(isLogin){
      dispatch(taskListActions.addTask({id:Math.random().toString(),text:enteredValue}));
    }

    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label>To Do</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
        {!isLogin && <p style={{color:"red"}}>Please Login to Save your task</p>}
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
