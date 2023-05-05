import React from 'react';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';
import { useSelector } from 'react-redux';

const CourseGoalListUpcoming = props => {
  const items = useSelector(state => state.task.items);

  const today = new Date();
  today.setHours(0,0,0,0);

  let upcomingItems = items.filter((item)=>{
    const deadline = new Date(item.deadline);
    deadline.setHours(0,0,0,0);
    return deadline > today;
  })

  return (
    <ul className="goal-list">
      {upcomingItems.map(goal => (
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

export default CourseGoalListUpcoming;
