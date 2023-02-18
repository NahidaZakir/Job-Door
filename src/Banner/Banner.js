import React from 'react';
import banner from '../assets/banner.jpg';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
const Banner = (checked) => {

    return (
        <div className="card md:card-side bg-base-100 shadow-xl ">
            <div className='w-full md:w-1/2 md:h-full'>
                <figure><img src={banner} alt="Album" /></figure>
            </div>
            <div className="card-body w-full md:w-1/2 bg-orange-600 ">
                <p className='text-2xl lg:text-xl my-3 leading-8 text-white'>Find Job, Employment, and Career Opportunities</p>
                <h2 className="text-5xl lg:text-8xl leading-8 text-white">Your Dream Job</h2>
                <p className='text-2xl lg:text-4xl my-3 leading-8 text-white'>At Your Door</p>
                <div className="flex justify-between lg:justify-end mb-3">
                    <div className='text-xl text-white font-bold md:mr-10'>Job Seeker</div>
                    <div>
                        <ToggleSwitch ></ToggleSwitch>
                    </div>

                    <div className='text-xl text-white font-bold md:ml-10'>Job Poster</div>
                </div>
            </div>

        </div>
    );
};

export default Banner;