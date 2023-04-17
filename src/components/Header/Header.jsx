import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {


    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut=()=>{
        logOut()
        .then(result=>{})
        .then(error=> console.log(error))

    }
  
    return (
        <nav className='header sticky top-0 '>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to='/sign-up'>Sign up</Link>
                {
                    user && <p className='text-white'>{user.email} <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button></p>
                }
             
            </div>
           
        </nav>
    );
};

export default Header;