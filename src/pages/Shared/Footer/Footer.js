import React from 'react';

const Footer = () => {
    return (
        <div className='footer-center'>
            <footer className="footer p-10 flex justify-between">
                <div>
                    <span className="footer-title">Employers</span>
                    <a className="link link-hover">Browse Candidates</a>
                    <a className="link link-hover">Post a job</a>
                    <a className="link link-hover">Employer Listing</a>
                    <a className="link link-hover">Resume Page</a>
                </div>
                <div>
                    <span className="footer-title">Candidate</span>
                    <a className="link link-hover">Browse Jobs</a>
                    <a className="link link-hover">Submit Resume</a>
                    <a className="link link-hover">Dashboard</a>
                    <a className="link link-hover">Browse Categories</a>
                </div>
                <div>
                    <span className="footer-title">Account</span>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">Sign In</a>
                    <a className="link link-hover">Create Account</a>
                </div>

            </footer>

            <div >
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>

    );
};

export default Footer;