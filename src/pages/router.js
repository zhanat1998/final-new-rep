import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";
import MainPageContainer from "../container/mainContainer";
import CreateProduct from "../components/createProduct/createProduct";
import ReadProduct from "../components/readProduct/readProduct";
import UpdateProduct from "../components/updateProduct/updateProduct";
import CartProductsContainer from "../container/cartProduct";
export const router = createBrowserRouter([
    {
        path: '/',
        element: < MainPageContainer />
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
        element: <CartProductsContainer />
    },
]);