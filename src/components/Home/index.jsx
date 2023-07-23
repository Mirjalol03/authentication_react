import React from 'react'
import { useDispatch } from 'react-redux'
import { loginLogout } from '../../redux/actions/authAction';
import { toast } from 'react-toastify';

const Home = () => {
    const dispatch = useDispatch();
    const notify = () => toast("Wow so easy!");


    const handleUserLogOut = () => {
        dispatch(loginLogout());
    }
    
    return (
      <div>
        <h2 onClick={notify}>Hi user</h2>
        <button onClick={handleUserLogOut}>Log out</button>
      </div>
    );
}

export default Home
