import React from 'react';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';
import { useSelector } from 'react-redux';

const CourseGoalListToday = props => {
  const items = useSelector(state => state.task.items);

  const today = new Date();
  today.setHours(0,0,0,0);

  let todayItems = items.filter((item)=>{
    const deadline = new Date(item.deadline);
    deadline.setHours(0,0,0,0);

    return !(deadline > today) && !(deadline < today);
  })

  console.log(todayItems);
    
  return (
    <ul className="goal-list">
      {todayItems.map(goal => (
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

export default CourseGoalListToday;
