import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import FriendDetails from "../Components/Your Friends/FriendDetails/FriendDetails";
import TimeLinePage from "../Pages/TimeLinePage/TimeLinePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StatusPage from "../Pages/StatusPage/StatusPage";




const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/:id',
                Component: FriendDetails,
                loader: () => fetch('friends.json')
            },
            {
                path: '/timeLine',
                Component: TimeLinePage
            },
            {
                path: '/status',
                Component: StatusPage
            }
        ]
        
    }
])

export default router
