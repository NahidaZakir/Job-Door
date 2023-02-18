import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExperiencedJob from '../ExperiencedJob/ExperiencedJob';

const ExperiencedJobsAll = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(' https://job-door-server.vercel.app/experiencedjobs-all')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div className='mt-10'>
            <div className='flex justify-center'>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        jobs.map(job => <ExperiencedJob key={job.jobNumber} infor={job}></ExperiencedJob>)
                    }

                </div>

            </div>

            <div className='text-center my-10'>
                <Link to='/'><button className="btn border-none bg-orange-600 btn-md lg:btn-lg ">See Less</button></Link>
            </div>
        </div>
    );
};

export default ExperiencedJobsAll;