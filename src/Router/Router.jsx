import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import FriendDetails from "../Components/Your Friends/FriendDetails/FriendDetails";




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
            }
        ]
        
    }
])

export default router
