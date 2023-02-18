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
        <div>
            <div className='text-center'>
                <h1>Experienced Jobs</h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    jobs.map(job => <ExperiencedJob key={job.jobNumber} infor={job}></ExperiencedJob>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/experiencedjobsall'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">See All</button></Link>
            </div>
        </div>
    );
};

export default ExperiencedJobs;