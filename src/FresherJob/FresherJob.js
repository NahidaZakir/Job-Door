import React from 'react';

const FresherJob = ({ infor }) => {
    const { positionName, companyName, jobLocation } = infor;
    return (
        <div className="card w-96 bg-emerald-500 text-white">
            <div className="card-body">
                <h2 className="font-bold text-3xl">{positionName}</h2>
                <p className='text-xl'>Company: {companyName}</p>
                <p className='text-xl'>Location: {jobLocation}</p>
                <div className="card-actions justify-end">
                    <button className="btn  border-none font-bold">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default FresherJob;