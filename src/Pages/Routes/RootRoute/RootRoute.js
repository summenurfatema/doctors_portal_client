import Appointment from "../../Appointment/Appointment/Appointment";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../../Layout/Main");
const { default: Home } = require("../../Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])