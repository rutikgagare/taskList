import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Error from './components/pages/Error';
import './App.css';

const router = createBrowserRouter([
  {path:'/',element:<Home></Home>,errorElement:<Error></Error>},
  {path:'/register',element:<Register></Register>,errorElement:<Error></Error>},
  {path:'/login',element:<Login></Login>,errorElement:<Error></Error>},
]);

const App = () => {
  return(
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
