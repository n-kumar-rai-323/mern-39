import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";

import BloodRegisterDesign from "../pages/auth/register/register";
import BloodLoginDesign from "../pages/auth/login/login.page";
import AuthLayout from "../pages/home/auth";
import NotFound from "../components/error/not-found";
import HomePage from "../pages/home/landing";
import FindDonors from "../pages/home/donor";
import AdminDashboard from "../pages/auth/dashbord/admin";

// second approch 
const routerConfig= createBrowserRouter([
    {
        path:"/",
        element:<BloodLoginDesign/>
    },
    {
        path:"/register",
        Component:BloodRegisterDesign
    },
    {
        path:"/landing",
        element:<HomePage/>
    },
    {
        path:"/donor",
        element:<FindDonors/>
    },
    {
        path:"/dashbord",
        element:<AdminDashboard/>
    },
    {
        path:"*",
        element:<NotFound/>
    }
])


const RouterConfig = () => {
    return (
        <>
        <RouterProvider router={routerConfig}/>
            {/* first aproch  */}
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/login"  Component={BloodLoginDesign}></Route>
                    <Route path="/register" Component={BloodRegisterDesign}></Route>
                </Routes>
            </BrowserRouter> */}
        </>
    )
}


export default RouterConfig;