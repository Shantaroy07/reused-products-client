import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:name',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;