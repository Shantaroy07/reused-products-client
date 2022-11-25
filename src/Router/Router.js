import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;