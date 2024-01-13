import { useEffect } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product/product-card";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getProductsAction } from "../../store/shop/action";
import { Link, useNavigate } from "react-router-dom";
import s from './style.module.scss'
import SearchBar from "../../components/searchBar/searchBar";
import { Product } from "../../store/shop/utils";
type ProductType = {
    products: Product[];
}
const MainPage: React.FC<ProductType> = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.shopReducer.products)
    console.log("productsaa: ", products)
    const navigate = useNavigate();
    const toCreateProduct = () => {
        navigate('/add-product')
    }
    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    };
    return (
        <div>
            <div>
                <Navbar />
                <ul>
                    {localStorage.getItem('token') ? <li> <button
                        onClick={handleLogout}>Выйти</button> </li> : <li className={s.header_login}>
                        <Link to={'/login'}>login</Link></li>}
                </ul>
            </div>
            <SearchBar />
            <div className={s.sort}>
                <h5>Сортировать по:</h5>
                <button >Ценам</button>
                <button >Сначала новые</button>
                <button >Сначала старые</button>
                <button >Без фильтров</button>
            </div>

            <ul className={s.main__card}>
                {products.map((product) => <ProductCard {...product} key={product.id} />)}
            </ul>
            <ul className={s.ul__post}>
                <li className={s.post__li} onClick={toCreateProduct}>Создать товар</li>
            </ul>

        </div>
    )
}
export default MainPage; 