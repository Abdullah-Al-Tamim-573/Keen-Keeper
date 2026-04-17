import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Components/HomePage/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
        
    }
])

export default router
