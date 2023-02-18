import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FresherJob from '../FresherJob/FresherJob';
const FresherJobsAll = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fresherjobs-all')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    jobs.map(job => <FresherJob key={job.jobNumber} infor={job}></FresherJob>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-bounce">See Less</button></Link>
            </div>
        </div>


    );
};

export default FresherJobsAll;