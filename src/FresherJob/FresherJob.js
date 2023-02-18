import React from 'react';

const FresherJob = ({ infor }) => {
    const { positionName, companyName, jobLocation } = infor;
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{positionName}</h2>
                <p>{companyName}</p>
                <p>{jobLocation}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default FresherJob;