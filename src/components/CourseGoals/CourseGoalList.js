import React from 'react';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';
import { useSelector } from 'react-redux';

const CourseGoalList = props => {
  const items = useSelector(state => state.task.items);
  let AllItems = items.filter((item)=>{
    return item.status !== "completed";
  })

  return (
    <ul className="goal-list">
      {AllItems.map(goal => (
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

export default CourseGoalList;
