import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Error from '../../assets/images/error.jpg'
const DisplayError = () => {
    
     return (
        <div>
            <button className=' cursor-pointer border-sky-500 mt-7 rounded-md text-sky-400 border-2 px-4 py-2 mb-10  block mx-auto'><Link to="/">Go to home </Link></button>
            <img src={Error} alt="" />
        </div>
    );
};

export default DisplayError;