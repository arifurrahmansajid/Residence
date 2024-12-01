import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/Shared/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import ProtectRoutes from "../auth/ProtectRoute/ProtectRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/residential.json')
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/blogs",
                element: <Blog></Blog>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/updateprofile",
                element: <ProtectRoutes>
                    <Profile></Profile>
                </ProtectRoutes>,
            },
            {
                path: "/viewdetails/:id",
                element: <ProtectRoutes>
                    <ViewDetails></ViewDetails>
                </ProtectRoutes>,
                loader: () => fetch('/residential.json')
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            }
        ]
    },
]);

export default router;