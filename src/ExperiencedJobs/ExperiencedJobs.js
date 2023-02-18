import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExperiencedJob from '../ExperiencedJob/ExperiencedJob';
const ExperiencedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/experiencedjobs-6')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div className='my-10'>
            <div className='text-center  mb-7'>
                <h1 className='text-3xl lg:text-7xl '>Experienced Jobs</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        jobs.map(job => <ExperiencedJob key={job.jobNumber} infor={job}></ExperiencedJob>)
                    }
                </div>
            </div>

            <div className='text-center mt-10'>
                <Link to='/experiencedjobsall'><button className="btn bg-emerald-700 border-none btn-md lg:btn-lg ">See All</button></Link>
            </div>
        </div>
    );
};

export default ExperiencedJobs;