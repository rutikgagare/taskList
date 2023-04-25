import React from 'react';
import CourseGoalItem from './CourseGoalItem';
import './CourseGoalList.css';
import { useSelector } from 'react-redux';

const CourseGoalList = props => {
  const items = useSelector(state => state.task.items);

  return (
    <ul className="goal-list">
      {items.map(goal => (
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

export default CourseGoalList;
