import React from 'react';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';
import { useSelector } from 'react-redux';

const CourseGoalListCompleted = props => {
  const items = useSelector(state => state.task.items);

  let completedItems = items.filter((item)=>{
    return item.status === "completed";
  })
    
  return (
    <ul className="goal-list">
      {completedItems.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
          deadline={goal.deadline}
          status={goal.status}
        >
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalListCompleted;
