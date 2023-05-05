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

  const toggleInputBox = () => {
    setInputBox((prev)=>!prev);
  }

  const updateTaskHandler = () => {
    console.log(editedTask);

    if (editedTask.length === 0) {
      return;
    }
    dispatch(taskListActions.updateTask({ id: props.id, text: editedTask }));
    toggleInputBox();
  }

  const completeTaskHandler = () =>{
    dispatch(taskListActions.updateStatus({id:props.id,status:"completed"}));
  }

  return (
    <>
      <li className='goal-item'>
        <div className="goal-item-description">
          <h3>{props.text}</h3>
          <h4>{props.deadline}</h4>
        </div>
      
        <div className="goal-item-icons">
          {props.status !== "completed" && <i class="fa-sharp fa-solid fa-pen-to-square" onClick={toggleInputBox}></i>}
          <i class="fa-solid fa-trash" onClick={deleteHandler}></i>
          {props.status !== "completed" && <i class="fas fa-check fa-xl" onClick={completeTaskHandler}></i>}   
        </div>
      </li>

      {inputBox &&
        <div className='goal-item-inputBox'>
          <input type="text" value={editedTask} placeholder='Edit task' onChange={(e) => { setEditedTask(e.target.value) }} />

          <div className="buttons">
            <button style={{ backgroundColor: 'green' }} onClick={updateTaskHandler}>Update</button>
            <button style={{ backgroundColor: 'red' }} onClick={toggleInputBox}>Cancel</button>
          </div>
        </div>
      }
    </>

  );
};

export default CourseGoalItem;
