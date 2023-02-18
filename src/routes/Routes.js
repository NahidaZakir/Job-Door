import ExperiencedJobsAll from "../ExperiencedJobsAll/ExperiencedJobsAll";
import FresherJobsAll from "../FresherJobsAll/FresherJobsAll";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: About } = require("../pages/About/About");

const { default: Home } = require("../pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/fresherjobsall',
                element: <FresherJobsAll></FresherJobsAll>
            },
            {
                path: '/experiencedjobsall',
                element: <ExperiencedJobsAll></ExperiencedJobsAll>
            }

        ]
    }
]);
export default router;