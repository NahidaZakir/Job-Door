import React from 'react';
import Banner from '../../Banner/Banner';
import ExperiencedJobs from '../../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../../FresherJobs/FresherJobs';
import TopIT from '../../TopIT/TopIT';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <TopIT></TopIT>
        </div>
    );
};

export default Home;