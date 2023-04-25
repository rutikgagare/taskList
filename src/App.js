import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import './App.css';

const router = createBrowserRouter([
  {path:'',element:<Home></Home>},
  {path:'register',element:<Register></Register>},
  {path:'login',element:<Login></Login>},
]);

const App = () => {
  return(
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
