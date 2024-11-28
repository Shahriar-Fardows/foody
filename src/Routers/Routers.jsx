import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default Routers;