import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";
import { deleteProductsAction } from "../../store/shop/action";
import { getProductsAction } from "../../store/shop/action";
import { Product } from "../../store/shop/typeShop";
import { postCartAction } from "../../store/cart/action";
import ProductCard from "../../components/product/product-card";

const ProductCardContainer: React.FC<Product> = (product) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const deleteProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(deleteProductsAction(product.id))
            .then(() => dispatch(getProductsAction()))
    }
    const readProduct = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
        navigate(`/read-product/${product.id}`)

    }
    const postCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(postCartAction({
            navigate, product: product.id, quantity: 0
        }));
        alert('добавлено в корзину')
    }
    return (
        <ProductCard product={product}
            postCart={postCart}
            readProduct={readProduct}
            deleteProduct={deleteProduct} />
    );
}
export default ProductCardContainer;