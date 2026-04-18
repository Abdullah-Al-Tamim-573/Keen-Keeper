import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import FriendDetails from "../Components/Your Friends/FriendDetails/FriendDetails";
import TimeLinePage from "../Pages/TimeLinePage/TimeLinePage";




const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: ':id',
                Component: FriendDetails,
                loader: () => fetch('friends.json')
            },
            {
                path: '/timeLine',
                Component: TimeLinePage
            }
        ]
        
    }
])

export default router
