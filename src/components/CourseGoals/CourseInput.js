import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';
import './CourseInput.css';

const CourseInput = props => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.isLogedIn);

  const [enteredValue, setEnteredValue] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const goalDateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    
    if(isLogin){
      dispatch(taskListActions.addTask({id:Math.random().toString(),text:enteredValue,deadline:enteredDate}));
    }

    setEnteredValue('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label htmlFor='task'>To Do</label>
        <input type="text" id='task' value={enteredValue} onChange={goalInputChangeHandler} />

        <label htmlFor="date">Deadline</label>
        <input type="date" value={enteredDate} onChange={goalDateChangeHandler} />
        {!isLogin && <p style={{color:"red"}}>Please Login to Save your task</p>}
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
