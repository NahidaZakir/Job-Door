import React from 'react';

const ExperiencedJob = ({ infor }) => {
    const { positionName, companyName, jobLocation, logo } = infor;
    return (
        <div className="card w-96 border-2">
            <div className="card-body">
                <div className='flex justify-between h-3/4'>
                    <div>
                        <h2 className="font-bold text-3xl">{positionName}</h2>
                        <p className='text-xl'>Company: {companyName}</p>
                        <p className='text-xl'>Location: {jobLocation}</p>
                    </div>
                    <div>
                        <div className="avatar ">
                            <div className="w-16 h-16 rounded-full">
                                <img src={logo} />
                            </div>
                        </div>

                    </div>


                </div>


                <div className="flex justify-center h-1/4">
                    <button className="btn font-bold bg-orange-600 border-none w-3/4">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default ExperiencedJob;