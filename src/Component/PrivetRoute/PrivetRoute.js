import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextAuth } from '../../Context/AuthContext';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(ContextAuth);
    const location=useLocation();
    if(loading){
        return <div className='w-12/12 flex justify-center'><div className="radial-progress my-20 text-red-500" style={{"--value":70}}>LOADING</div></div>;
    }

    if(user&&user.uid){
        return children;
    }else{
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
};

export default PrivetRoute;