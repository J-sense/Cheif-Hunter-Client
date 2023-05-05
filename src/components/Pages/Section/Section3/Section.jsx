import React from 'react';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaUser,FaClock,FaHeart} from 'react-icons/fa';

import img from "../Section3/img/product38.jpg"
import img1 from "../Section3/img/product39.jpg"
import img2 from "../Section3/img/product40.jpg"
import img3 from "../Section3/img/product41.jpg"
import img4 from "../Section3/img/product42.jpg"
import img5 from "../Section3/img/product43.jpg"
import img6 from "../Section3/img/product46.jpg"
import img7 from "../Section3/img/product47.jpg"
import img8 from "../Section3/img/product48.jpg"
import img9 from "../Section3/img/product49.jpg"

const Section = () => {
    return (
        <div className='grid gap-14 lg:grid-cols-3 sm:grid-cols-1'>
            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>


            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img1} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Burger</h2>
                    <p className='text-2xl text-slate-800'>Grilled Portobello Mushroom Burger With Mango Strips</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      Looking for easy and tasty vegetarian recipe ideas? If so, try this grilled portobello mushroom burger: here it's served with mango strips and a tasty sauce.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

               <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img2} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Noodle</h2>
                    <p className='text-2xl text-slate-800'>Spaghetti</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                       A long, thin, cylindrical pasta of Italian origin, often served with a tomato-based sauce and meatballs.                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img3} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img4} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img5} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img6} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img7} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>

            <div className="  bg-base-100 ">
                <figure className="">
                    <img src={img8} alt="Shoes" className='transform transition duration-300 hover:scale-105'  />
                </figure>
                <div className="card-body border-o items-center text-center">
                    <h2 className="card-title text-xl text-red-600">Salad</h2>
                    <p className='text-2xl text-slate-800'>Tomatoes Stuffed with Foie and Chanterelles</p>
                    <Rating
                                // initialRating={likes}
                                emptySymbol={<FaStar className="text-yellow-300 " />}
                                fullSymbol={<FaStar className="text-amber-400" />}
                                readonly
                                className='mt-1 text-lg'
                            />
                      <p className='text-slate-600 font-sens'>
                      More off this less hello salamander lied porpoise much over tightly circa outside crud mightily rigorouse.
                    </p>      

                    <div className="card-actions text-xl flex gap-2s items-center">
                        <FaClock className='text-red-500'/> <p className='text-slate-500'>15 Mins</p> <FaUser className='text-red-500'/> <p className='text-slate-600'>by <small className='text-black'>John Martin</small></p> <FaHeart className='text-red-500'/><p className='text-slate-600'>15</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Section;