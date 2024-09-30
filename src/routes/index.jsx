import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Error404 from "../views/Error404";
import Profile from "../views/Profile";
import Info from "../views/Info";
import Liked from "../views/Liked";

const router = createBrowserRouter([
    {
        path: '/',
        element: < Home />,
        errorElement: <Error404 />
    },
    {
        path: '/detail/:eventId',
        element: <Detail />
    },
    {
        path: '/profile',
        element: <Profile />,
        children: [
            {
path: 'my-info',
element: <Info/>
            }, {
                path: 'liked-events',
                element: <Liked />

            }
        ],
    }
]);


const MyRoutes = () => <RouterProvider router={router} />;


export default MyRoutes;