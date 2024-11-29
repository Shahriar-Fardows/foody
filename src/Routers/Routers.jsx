import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import ProductDetails from "../Page/ProductDetails/ProductDetails";

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
            {
                path: "/product/:id",
                // element: <ProductDetails />,
            },
        ],
    },
]);

export default Routers;