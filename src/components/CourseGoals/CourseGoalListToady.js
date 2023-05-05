import React from 'react';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';
import { useSelector } from 'react-redux';

const CourseGoalListToday = props => {
  const items = useSelector(state => state.task.items);

  const today = new Date().toISOString().slice(0, 10);
  
  let todayItems = items.filter((item)=>{
    return item.deadline === today;
  })
    
  return (
    <ul className="goal-list">
      {todayItems.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
        >
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalListToday;
