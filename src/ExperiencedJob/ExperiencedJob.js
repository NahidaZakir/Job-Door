import React from 'react';

const ExperiencedJob = ({ infor }) => {
    const { positionName, companyName, jobLocation, logo } = infor;
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{positionName}</h2>
                <p>{companyName}</p>
                <p>{jobLocation}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Apply</button>
                </div>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={logo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperiencedJob;