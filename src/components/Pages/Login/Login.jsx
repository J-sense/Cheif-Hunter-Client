import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Login = () => {
    const location =useLocation()
    const navigate =useNavigate()
    let from = location.state?.from?.pathname || "/"
    console.log(location)
    const {signIn,user,googlepopup,UpdateUserData} =useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const email =event.target.email.value;
        const password =event.target.password.value;
        console.log(email,password)
        signIn(email,password)
        .then((reult)=>{
            const signed = reult.user;
            console.log(signed);
            // UpdateProfile(user,name,photo)
           navigate(from, {replace :true})
        })
        .catch(err=>{
            console.log(err)
        })


        const UpdateProfile = (user, name, photo) => {
            UpdateUserData(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
        };
     
    
    }
    const handlegogle = () => {
        googlepopup()
          .then((result) => {
            const userlogged = result.user;
            // do something with userlogged
          })
          .catch((err) => {
            const errorMessage = err.message;
          });
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

                            <div className='text-center'>
                                <button onSubmit={handlegogle} className="btn btn-outline">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;