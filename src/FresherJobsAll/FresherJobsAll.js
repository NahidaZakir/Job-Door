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
        <div className='mt-10'>
            <div className='flex justify-center'>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        jobs.map(job => <FresherJob key={job.jobNumber} infor={job}></FresherJob>)
                    }
                </div>
            </div>
            <div className='text-center my-10'>
                <Link to='/'><button className="btn bg-emerald-600 border-none btn-md lg:btn-lg">See Less</button></Link>
            </div>
        </div>


    );
};

export default FresherJobsAll;