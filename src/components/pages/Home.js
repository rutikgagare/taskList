import CourseGoalList from '../CourseGoals/CourseGoalList';
import CourseInput from '../CourseGoals/CourseInput';
import classes from './Home.module.css';
import { auth } from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

let send = false;

const Home = () => {
  const isLogin = useSelector(state => state.login.isLogedIn);
  console.log("isLogin"+isLogin);

  const items = useSelector(state => state.task.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLogin){
      let user = auth.currentUser.email.substring(0, 4);
      const sendData = async () => {
        await fetch(`https://tasklist-6a4e5-default-rtdb.firebaseio.com/${user}.json`, {
          method: "PUT",
          body: JSON.stringify({items:items})
        })
      }

      if(send == false){
        send = true;
        return;
      }
      sendData();
    }
  },[items]);

  useEffect(() => {
    if(isLogin) {
      let user = auth.currentUser.email.substring(0, 4);
      const fetchData = async () => {
        const response = await fetch(`https://tasklist-6a4e5-default-rtdb.firebaseio.com/${user}.json`);
        const data = await response.json();
        dispatch(taskListActions.replace(data.items));
      }
      fetchData();
    }
  }, [isLogin]);

  return (
    <div>
      <section className={classes.user}>
        <h2>Task List</h2>
        {/* <h2>Task List {isLogin && auth.currentUser.email.substring(0,auth.currentUser.email.length - 10)}</h2> */}

        <div className={classes.buttons}>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      </section>

      <section className={classes.userDetails}>
        {isLogin && <h3>Hello {auth.currentUser.email}</h3>}
      </section>

      <section className={classes.goalForm}>
        <CourseInput />
      </section>
      <section className={classes.goals}>
        {isLogin && <p>Click on the task You want to remove</p>}
        <CourseGoalList></CourseGoalList>
      </section>
    </div>
  );
};

export default Home;
