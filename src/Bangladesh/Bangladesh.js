import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Company from '../Company/Company';


const Bangladesh = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        fetch(' https://job-door-server.vercel.app/bangladesh')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, []);
    return (
        <div className='mb-10'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-7xl mb-10 font-semibold'>Top IT Company Bangladesh</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        companies.map(company => <Company key={company.jobNumber} infor={company}></Company>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Bangladesh;