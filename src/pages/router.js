import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";
import MainPage from "./main-page/main-page";
import CreateProduct from "../components/createProduct/createProduct";
import ReadProduct from "../components/readProduct/readProduct";
import UpdateProduct from "../components/updateProduct/updateProduct";
export const router = createBrowserRouter([
    {
        path: '/',
        element: < MainPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/add-product',
        element: <CreateProduct />
    },
    {
        path: '/read-product/:Pid',
        element: <ReadProduct />
    },
    {
        path: '/edit-product/:ParamId',
        element: <UpdateProduct />
    },
    {
        path: '/cart-products',
        element: <CartProducts />
    },
]);