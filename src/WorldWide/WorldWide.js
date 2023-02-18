import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Company from '../Company/Company';


const WorldWide = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/worldwide')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, []);
    return (
        <div>
            <div className='text-center'>
                <h1>TOP TECH COMPANY WORLD WIDE</h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    companies.map(company => <Company key={company.jobNumber} infor={company}></Company>)
                }
            </div>
        </div>
    );
};

export default WorldWide;