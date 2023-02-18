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
        <div>
            <div className='text-center'>
                <h1>Fresher Jobs</h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    jobs.map(job => <FresherJob key={job.jobNumber} infor={job}></FresherJob>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/fresherjobsall'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-bounce">See All</button></Link>
            </div>


        </div>
    );
};

export default FresherJobs;