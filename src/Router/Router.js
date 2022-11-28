import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashbordLayout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSeller from "../Pages/Dashboard/Admin/Allseller";
import MyOrder from "../Pages/Dashboard/Buyers/MyOrder";
import AddProduct from "../Pages/Dashboard/Sellers/AddProducts";
import MyProducts from "../Pages/Dashboard/Sellers/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRouter/PrivateRouter";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
    ,
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [

            {
                path: '/dashboard/buyer',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            }

        ]
    }
])

export default router;