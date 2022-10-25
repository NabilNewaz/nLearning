import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Home></Home>
        },
        {
          path: "/courses",
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Courses></Courses>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "*",
          element: <div>not found</div>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
