import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(loading);

    if(loading){
        return <progress className="progress w-56"></progress>
    }


    if(user){
        return children;
    }



    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRouter;