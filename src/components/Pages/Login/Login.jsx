import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {
    const {signIn} =useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const email =event.target.email.value;
        const password =event.target.password.value;
        console.log(email,password)
        signIn(email,password)
        .then((reult)=>{
            const signed = reult.user;
            console.log(signed)
        })
        .catch(err=>{
            console.log(err)
        })
    
    }
    return (
        <form onSubmit={handleLogin}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                <p>Or <Link to='/signup'>Signup</Link> using</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;