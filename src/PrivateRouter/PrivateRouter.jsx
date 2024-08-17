/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../component/Loading';

const PrivateRouter = ({ children }) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return(
            <Loading/>
        )
    }
    if(user){
        return children
    }
  return (
    <Navigate to="/sign_in" state={{from : location}}></Navigate>
  )
}

export default PrivateRouter;