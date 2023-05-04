import React, { useEffect, useState } from 'react';
import banner from '../../assets/9.jpg'
import Section1 from './Section/Section1';
import Section2 from './Section/section2';


const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect (()=>{
        fetch("http://localhost:5000/alldata")
        .then(response => response.json())
        .then(data=>setCategories(data))
    },[])
    // console.log(categories)
    return (
        <>
            <div className='relative '>
                <div className=''>
                    <img src={banner} alt="" className='lg:w-[100%] lg:h-[100vh]' />

                </div>
                <div class="absolute top-8 left-2 lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 flex justify-center items-center">
                    <div>
                        <h1 className='text-white lg:text-7xl text-xl font-serif'>FOOD MADE WITH LOVE</h1>
                        <h1 className='text-center lg:text-2xl lg:mt-11 text-white'>Take a slice of our perfect culinary heaven</h1>
                        <div className='lg:text-center lg:mt-7 mt-3'>
                            <button st className='lg:px-10 px-5 text-lg py-3  lg:py-5 bg-amber-500 text-white font-thin'>See Menu</button>
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <h1 className='text-slate-600 text-center mt-10 lg:text-7xl text-2xl font-serif underline'>Ranna,s Cheif</h1>
            </div>
            <div className='grid grid-cols-1 p-8 lg:p-0 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 lg:ml-32 lg:mr-32'>
                {
                    categories.map((category)=><Section2 category={category}></Section2> )
                }
                
            </div>
            <div>
                {/* <Section2></Section2> */}
            </div>
            <div className='p-8 lg:p-0'>
                <Section1></Section1>
            </div>
        </>

    );
};

export default Home;