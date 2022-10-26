import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Coursedetails from './Pages/Coursedetails/Coursedetails';
import Courses from './Pages/Shared/Courses/Courses';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import TermsandCondition from './Pages/TermsandCondition/TermsandCondition';
import Blog from './Pages/Blog/Blog';

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
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/terms",
          element: <TermsandCondition></TermsandCondition>
        },
        {
          path: "/course/:id",
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
          element: <PrivateRoute><Coursedetails></Coursedetails></PrivateRoute>
        },
        {
          path: "*",
          element: <Notfound></Notfound>
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
