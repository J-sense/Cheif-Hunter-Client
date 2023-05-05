import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ViewCheif from './ViewCheif';
import Header from '../Header/Header';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const Cheif = () => {
     const [disabledFirst, setDisabledFirst] = useState(false);
    const [disabledSecond, setDisabledSecond] = useState(false);
    const [disabledThird, setDisabledThird] = useState(false);
    const FirstButtonDisable = () => {
        toast.success("added to the favorite!");
        setDisabledFirst(true);
    };
    const SecondButtonDisable = () => {
        toast.success("added to the favorite!");
        setDisabledSecond(true);
    };
    const ThirdButtonDisable = () => {
        toast.success("added to the favorite!");
        setDisabledThird(true);
    };


    const [allData, setAllData] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/alldata/${id}`)
            .then(response => response.json())
            .then(data => setAllData(data))
        console.log(allData)
    }, [])

    const { bio, name, image, likes, number_of_recipes, years_of_experience, recipes } = allData
    return (
        <div className='bg-[#DEE9EA] '>
            <Header></Header>
            <div className='flex justify-center mt-14 '>
                <div className="card lg:card-side bg-white shadow-xl w-[1200px]">
                    <figure><img src={image} alt="Album" className='lg:w-96 sm:w-full sm:m-8 lg:m-0' /></figure>
                    <div className="card-body w-96">
                        <h1  className="font-sans text-3xl font-bold leading-[3rem] text-emerald-700 mb-3">
                            {name}
                        </h1>
                        <p className="leading-6 text-lg text-justify text-gray-600">{bio}</p>
                        <div className=" mt-5">
                            <p className="text-xl mb-2 font-semibold text-gray-800">
                                Experience : {years_of_experience} Year's
                            </p>
                            <p className="text-xl mb-2 font-semibold text-gray-800">
                                Total Recipes : {number_of_recipes} type's
                            </p>
                            <div className="text-xl flex gap-2 font-semibold text-gray-800">
                                Likes :
                                <Rating
                                    initialRating={likes}
                                    emptySymbol={<FaStar className="text-yellow-300 " />}
                                    fullSymbol={<FaStar className="text-amber-400" />}
                                    readonly
                                    className='mt-1 text-lg'
                                />
                                {likes}
                            </div>
                        </div>
                    </div>
                </div>

                
                


            




        </div>
        </div>
    );
};

export default Cheif;