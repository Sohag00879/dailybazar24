import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EditProduct from "../pages/EditProduct/EditProduct";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProductLists from "../pages/productLists/ProductLists";
import SignIn from "../pages/signIn/SingIn";
import ProtectedRoute from "../utils/ProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ProductLists />,
            },
            {
                path: "/products/:productId",
                element: <ProductDetails />,
            },
            {
                path: "/products/edit/:productId",
                element: (
                    <ProtectedRoute>
                        <EditProduct />
                    </ProtectedRoute >
                ),
            },
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: '*',
                element: <NotFound />
            }

        ],
    },
]);

export default router;
