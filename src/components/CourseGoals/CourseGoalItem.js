import React from 'react';
import './CourseGoalItem.css';
import { useDispatch } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';

const CourseGoalItem = props => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(taskListActions.removeTask(props.id   ))
  };

  return (
    <li className="goal-item">
      <h3>{props.text}</h3>

      <div className="goal-item-buttons">
        {/* <button onClick={deleteHandler}>edit</button> */}
        <button onClick={deleteHandler}>delete</button>
      </div>
      
    </li>
  );
};

export default CourseGoalItem;
