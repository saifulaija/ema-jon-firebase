import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

 const handleSignUp=(event)=>{



  

    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password);
    setError('')

    if(password !== confirm){
        setError('Password do not matched')
        return
    }
    else if(password.length < 6){
        setError('password should be at least 6 character')
        return
    }

    createUser(email, password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);

    })
    .catch(error=>{
        console.log(error);
        setError(error.message)
    })
 }


    return (
        <div className="hero min-h-screen bg-red-300">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold"> Please Sign-Up now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' required placeholder="Password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password" name='confirm' placeholder=" confirm password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Already have an account? <Link to='/sign-up'>Got to Login</Link></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             
            </form>
            <p className='text-yellow-600'>{error}</p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;