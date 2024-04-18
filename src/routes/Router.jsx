import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Book from "../pages/Book/Book";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Profile from "../pages/Profile/Profile";

// import Reviews from "../pages/Home/Reviews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/properties.json'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/estate-details/:id",
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: ()=>fetch('/properties.json'),
            },
            {
                path: "/estate-details/:id/book",
                element: <PrivateRoute><Book></Book></PrivateRoute>,
                loader: ()=>fetch('/properties.json'),
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            // {
            //     path: "/",
            //     element: <Reviews></Reviews>,
            //     loader: ()=>fetch('/reviews.json')
            // },
            
        ]
    }    
])

export default router;