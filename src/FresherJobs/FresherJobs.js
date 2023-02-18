import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FresherJob from '../FresherJob/FresherJob';

const FresherJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fresherjobs-6')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div className='my-10'>
            <div className='text-center mb-7'>
                <h1 className='text-3xl lg:text-7xl '>Fresher Jobs</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        jobs.map(job => <FresherJob key={job.jobNumber} infor={job}></FresherJob>)
                    }
                </div>
            </div>

            <div className='text-center mt-10'>
                <Link to='/fresherjobsall'><button className="btn  bg-orange-600 border-none btn-md lg:btn-lg ">See All</button></Link>
            </div>


        </div>
    );
};

export default FresherJobs;