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
import Checkout from './Pages/Checkout/Checkout';
import FqaPage from './Pages/FqaPage/FqaPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/courses'),
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => fetch('https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/courses'),
          element: <Home></Home>
        },
        {
          path: "/courses",
          loader: () => fetch('https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/courses'),
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
          path: "/faq",
          element: <FqaPage></FqaPage>
        },
        {
          path: "/terms",
          element: <TermsandCondition></TermsandCondition>
        },
        {
          path: "/checkout/:id",
          loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/course/${params.id}`),
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: "/course/:id",
          loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/course/${params.id}`),
          element: <Coursedetails></Coursedetails>
        },
        {
          path: "*",
          element: <Notfound></Notfound>
        }
      ]
    }
  ])
  return (
    <div className='scrollbar-hide'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
