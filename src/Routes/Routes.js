import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import DisplayError from "../shared/DisplayError/DisplayError";
import Signup  from '../pages/signup/Signup'
import Locations from "../pages/Locations/Locations";

export  const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>, 
        children:[
            {
                path: '/', 
                element: <Home></Home>,
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup', 
                element: <Signup></Signup>
            }, 
            {
                path: '/locations', 
                element:<Locations></Locations>
            }
           
        ]
        
    }
])