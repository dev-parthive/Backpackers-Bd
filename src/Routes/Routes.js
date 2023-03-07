import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import DisplayError from "../shared/DisplayError/DisplayError";

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
                path: '*', 
                element: <DisplayError></DisplayError>
            }
        ]
        
    }
])