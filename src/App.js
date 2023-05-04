import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import Error from './components/pages/Error';
import './App.css';

const router = createBrowserRouter([
  {path:'/',element:<Home></Home>,errorElement:<Error></Error>},
  {path:'/signup',element:<Signup></Signup>},
  {path:'/login',element:<Login></Login>},
  {path:'/account',element:<Account></Account>},
]);

const App = () => {
  return(
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
