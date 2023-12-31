import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-light.png'
import { AuthContext } from '../AuthProvider';
// import { faAiOutlineUser } from 'react-icons/fa';
// import logo from '../../assets/logo-light.png'
import { BeakerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast';
const Header = () => {
    const { createUser, user, LogOutUser } = useContext(AuthContext);
    const HandleLogOut = () => {
        LogOutUser()
            .then(() => {
                // Sign-out successful.
                toast.success('Log Out Successfully');
            })
            .catch((error) => {
                // An error happened.
                toast.error(error.message);
            });

    }


    return (
        <div>
            <div className="navbar bg-stone-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>

                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" className='text-white ' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/blog'>Blog</Link>

                        </li>

                    </ul>
                </div>
                <div className="navbar-end ">

                    {user &&
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    title={user.displayName}
                                    className="avatar-img"
                                />
                            </div>
                        </label>
                    }
                    {
                        user ?
                            <button onClick={HandleLogOut} className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-lg rounded-md px-4 py-2 text-white font-semibold">
                                Log Out
                            </button>
                            :
                            <Link to='/login'>
                                <button className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-lg rounded-md px-4 py-2 text-white font-semibold">
                                    Login
                                </button>
                            </Link>
                    }
                  
                    {/* <div className="w-10 rounded-full border-white mr-3">
                       <UserCircleIcon />
                    </div>
                    {
                        user ? <button className="btn btn-ghost">LogOut</button> :  <Link to='/login'>Login</Link>
                    } */}


                </div>
            </div>
        </div>
    );
};

export default Header;