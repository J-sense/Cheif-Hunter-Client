import React, { useEffect, useState } from 'react';
import banner from '../../assets/9.jpg'
import Section1 from './Section/Section1';
import Section2 from './Section/section2';


const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect (()=>{
        fetch("http://localhost:3000/alldata")
        .then(response => response.json())
        .then(data=>setCategories(data))
    },[])
    console.log(categories)
    return (
        <>
            <div className='relative h-screen bg-[#050c1b]'>
                <div className=' bg-black bg-opacity-50'>
                    <img src={banner} alt="" className='w-[100%] h-[100vh]' />

                </div>
                <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div>
                        <h1 className='text-white lg:text-7xl text-2xl font-serif'>FOOD MADE WITH LOVE</h1>
                        <h1 className='text-center lg:text-2xl mt-11 text-white'>Take a slice of our perfect culinary heaven</h1>
                        <div className='text-center mt-7'>
                            <button st className='px-10 text-lg  py-5 bg-amber-500 text-white font-thin'>See Menu</button>
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <h1 className='text-slate-600 text-center mt-10 lg:text-7xl text-2xl font-serif underline'>Ranna,s Cheif</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 lg:ml-32 lg:mr-32'>
                {
                    categories.map((category)=><Section2 category={category}></Section2> )
                }
                
            </div>
            <div>
                {/* <Section2></Section2> */}
            </div>
            <div>
                <Section1></Section1>
            </div>
        </>

    );
};

export default Home;