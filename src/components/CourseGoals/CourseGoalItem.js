import React from 'react';
import './CourseGoalItem.css';
import { useDispatch } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';

const CourseGoalItem = props => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(taskListActions.removeTask(props.id))
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.text}
    </li>
  );
};

export default CourseGoalItem;
