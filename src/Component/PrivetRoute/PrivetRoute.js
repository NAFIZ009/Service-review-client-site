import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextAuth } from '../../Context/AuthContext';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(ContextAuth);
    const location=useLocation();
    if(loading){
        return <div>loading</div>;
    }

    if(user&&user.uid){
        return children;
    }else{
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
    // if(loading){
    //     return <div>Loading.....</div>
    // }
    // if(user.uid){
    //     return children;
    // }
    
    // return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;