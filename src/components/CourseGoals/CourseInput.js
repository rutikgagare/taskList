import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';
import './CourseInput.css';

const CourseInput = props => {
  const dispatch = useDispatch();

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
    
    dispatch(taskListActions.addTask({id:Math.random().toString(),text:enteredValue}));
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label>To Do</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
