import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: About } = require("../pages/About/About");
const { default: Contact } = require("../pages/Contact/Contact");
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
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }

        ]
    }
]);
export default router;