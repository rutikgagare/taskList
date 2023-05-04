import CourseGoalList from '../CourseGoals/CourseGoalList';
import CourseInput from '../CourseGoals/CourseInput';
import classes from './Home.module.css';
import { auth } from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { taskListActions } from '../../store/taskListSlice';
import { loginActions } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';

let send = false;

const Home = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged(function(user) {
      if (user) {
       console.log("Hello");
      } else {
       console.log("World");
      }
    });
    
  },[])

  const isLogin = useSelector(state => state.login.isLogedIn);
  console.log("user" + auth.currentUser);

  const items = useSelector(state => state.task.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLogin){
      let uid = auth.currentUser.uid;
      const sendData = async () => {
        await fetch(`https://tasklist-6a4e5-default-rtdb.firebaseio.com/${uid}.json`, {
          method: "PUT",
          body: JSON.stringify({items:items})
        })
      }

      if(send === false){
        send = true;
        return;
      }
      sendData();
    }
  },[items]);

  useEffect(() => {
    if(isLogin) {
      let uid = auth.currentUser.uid;
      const fetchData = async () => {
        const response = await fetch(`https://tasklist-6a4e5-default-rtdb.firebaseio.com/${uid}.json`);
        const data = await response.json();
        dispatch(taskListActions.replace(data.items));
      }
      fetchData();
    }
  }, [isLogin]);

  const logoutHandler = async () =>{
    dispatch(loginActions.setLogout());
    dispatch(taskListActions.replace([]))
    const response = await signOut(auth)
  }

  return (
    <div>
      <section className={classes.user}>
        <h2> <i class="fas fa-list-check"></i> Task List</h2>
  
        <div className={classes.buttons}>
          <button onClick={()=>navigate('/login')}><i class="fa-solid fa-user-plus"></i> Login</button>
          <button onClick={()=>navigate('/signup')}>SignUp</button>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </section>

      <section className={classes.userDetails}>
        {isLogin && <p>Hello {auth.currentUser.email}</p>}
      </section>

      <section className={classes.goalForm}>
        <CourseInput />
      </section>
      <section className={classes.goals}>
        <CourseGoalList></CourseGoalList>
      </section>
    </div>
  );
};

export default Home;
