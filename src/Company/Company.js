import React from 'react';

const Company = ({ infor }) => {
    const { companyName, logo } = infor;
    return (
        <div className="card w-96 bg-emerald-600 text-white">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <p className='text-xl lg:text-4xl'>{companyName}</p>
                    </div>
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full">
                            <img src={logo} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-actions flex justify-center ">
                <button className="btn font-bold w-full  border-none text-xl">View Details</button>
            </div>
        </div>
    );
};

export default Company;