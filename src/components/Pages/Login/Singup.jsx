import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { updateProfile } from 'firebase/auth';


const Singup = () => {
    const { createUser, UpdateUserData,googlepopup } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSucess] = useState()
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        // UpdateProfile(result.user,name,photo)
        // console.log(email,password)
        createUser(email, password)
            .then((result) => {
                const logggoduser = result.user;
                console.log(logggoduser)
                UpdateProfile(result.user, name, photo)

                setSucess('sign up successfully')
            })
            .catch(err => {
                setError(err.message);
                
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
        }
    


    };
   
    
    return (
        <form onSubmit={handleLogin}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                                <p>Already Have An Account? <Link to='/login' className='text-blue-950'>Login </Link></p>
                            </div>

                            <div>
                                <p className='text-red-700'>{error}</p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>

        </form>
    );
};



export default Singup;