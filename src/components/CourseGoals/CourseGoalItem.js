import React, { useState } from 'react';
import './CourseGoalItem.css';
import { useDispatch } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';

const CourseGoalItem = props => {
  const [inputBox, setInputBox] = useState(false);
  const [editedTask, setEditedTask] = useState('');

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(taskListActions.removeTask(props.id))
  };

  const showInputBox = () => {
    setInputBox(true);
  }

  const hideInputBox = () => {
    setEditedTask('');
    setInputBox(false);
  }

  const updateTaskHandler = () => {
    console.log(editedTask);

    if (editedTask.length === 0) {
      return;
    }
    dispatch(taskListActions.updateTask({ id: props.id, text: editedTask }));
    hideInputBox();
  }

  return (
    <>
      <li className="goal-item">
        <h3>{props.text}</h3>

        <div className="goal-item-icons">
          <i class="fa-sharp fa-solid fa-pen-to-square" onClick={showInputBox}></i>
          <i class="fa-solid fa-trash" onClick={deleteHandler}></i>
        </div>
      </li>

      {inputBox &&
        <div className='goal-item-inputBox'>
          <input type="text" value={editedTask} placeholder='Edit task' onChange={(e) => { setEditedTask(e.target.value) }} />

          <div className="buttons">
            <button style={{ backgroundColor: 'green' }} onClick={updateTaskHandler}>Update</button>
            <button style={{ backgroundColor: 'red' }} onClick={hideInputBox}>Cancel</button>
          </div>
        </div>
      }
    </>

  );
};

export default CourseGoalItem;
