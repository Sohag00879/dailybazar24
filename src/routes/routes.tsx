import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProductLists from "../pages/productLists/ProductLists";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProductLists />
            },
            {
                path: '/products/:productId',
                element: <ProductDetails />
            }
        ]
    }
])

export default router;