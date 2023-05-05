import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const Section2 = ({ category }) => {
    const { name, image,number_of_recipes,likes,years_of_experience,id} = category
    return (
        <div>
          
            <div className="card card-compact h-[600px] w-full bg-base-100 shadow-xl ">
                <figure>
                    <img src={image} className='transform transition duration-300 hover:scale-105' />
                   
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="text-xl ">
                        Years of experience : {years_of_experience} years
                    </p>
                    <p className="text-lg">
                        Number of Recipes : {number_of_recipes} types
                    </p>
                    <p className="text-lg">Likes : {likes} stars</p>
                    <div className="justify-center">
                        <Link to={`/alldata/${id}`}>
                            <button className='bg-orange-500 w-full font-semibold text-white py-3 focus:outline-none  rounded mt-3 transform transition duration-300 hover:scale-105'>View Recipies</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Section2;