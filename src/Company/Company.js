import React from 'react';

const Company = ({ infor }) => {
    const { companyName, logo } = infor;
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <p>{companyName}</p>
                <div className="card-actions justify-end">
                    <button className="btn">View Details</button>
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

export default Company;