import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";

// import BloodRegisterDesign from "../pages/auth/register/register";
import NotFound from "../components/error/not-found";
import BloodRegisterDesign from "../pages/auth/register/register.page";
import { ToastContainer } from "react-toastify";
import BloodLoginDesignn from "../pages/auth/login/login.page";

// second approch 
const routerConfig= createBrowserRouter([
    
    {
        path:"/login",
        element:<BloodLoginDesignn/>
    },
    {
        path:"/register",
        element:<BloodRegisterDesign/>
    },

    {
        path:"*",
        element:<NotFound/>
    }
])


const RouterConfig = () => {
    return (
        <>

        <ToastContainer theme="colored"/>
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