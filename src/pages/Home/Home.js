import React from 'react';
import Banner from '../../Banner/Banner';
import ExperiencedJobs from '../../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../../FresherJobs/FresherJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
        </div>
    );
};

export default Home;