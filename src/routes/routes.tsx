import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductLists from "../pages/productLists/ProductLists";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProductLists />
            }
        ]
    }
])

export default router;