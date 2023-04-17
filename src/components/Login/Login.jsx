import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate,useLocation, } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

  const [show, setShow]= useState(false)

    const [error, setError] = useState('')

    const {signIn} = useContext(AuthContext)


    // location a jaoar jonno state a dhora rakha

     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/'; 



    const handleLogIn=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            form.reset()
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }



    return (
        <div className="hero min-h-screen bg-red-300">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold"> Please Login now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
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
                <input type={show? 'text' : 'password'} name='password' required placeholder="password" className="input input-bordered" />
                <p onClick={()=>setShow(!show)}><small>
                  
                  {
                    show ? <span>Hide password</span> : <span>Show Password</span>
                  }
                  </small></p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Ema-jon first time? <Link to='/sign-up'>Got to Sign up</Link></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;