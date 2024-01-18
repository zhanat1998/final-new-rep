import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getProductsAction } from "../../store/shop/action";
import { Product } from "../../store/shop/typeShop";
import { sortByPrice, sortNew, sortOld, reset } from "../../store/shop/slice";
import MainPage from "../../components/main-page/main-page";

const MainPageContainer: React.FC<Product[]> = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.shopReducer.products)
    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    const handleSortPrice = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(sortByPrice());
    };
    const handleSortNew = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(sortNew());
    };
    const handleSortOld = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(sortOld());

    }
    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(reset());
    };
    return (
        <MainPage
            products={products}
            handleSortPrice={handleSortPrice}
            handleSortNew={handleSortNew}
            handleSortOld={handleSortOld}
            handleReset={handleReset}
        />
    )
}
export default MainPageContainer;