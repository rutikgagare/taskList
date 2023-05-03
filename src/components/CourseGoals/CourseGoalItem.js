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

      <div className="goal-item-icons">
        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash" onClick={deleteHandler}></i>
      </div>
      
    </li>
  );
};

export default CourseGoalItem;
