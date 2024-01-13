import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";
import { deleteProductsAction, postCartAction } from "../../store/shop/action";
import { getProductsAction } from "../../store/shop/action";
import s from './style.module.scss'
import { DeleteOutlined } from '@ant-design/icons'
import { Product } from "../../store/shop/utils";

type ProductCardProps = {
    product: Product
}
const ProductCard: React.FC<Product> = (product) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const deleteProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(deleteProductsAction(product.id))
            .then(() => dispatch(getProductsAction()))
    }
    const editProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate(`/edit-product/${product.id}`)

    }
    const readProduct = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
        navigate(`/read-product/${product.id}`)

    }
    const postCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // dispatch(postCartAction({
        //     navigate, ...{
        //         product: product.id,
        //         quantity: 0,
        //     }
        // }));
        alert('добавлено в корзину')
    }
    console.log(product, 'djghauewrh')

    return (
        <li className={s.card} key={product.id}>
            <img onClick={readProduct} className={s.card__img} src={product.image} alt="" />
            <button type="button" className={s.card} onClick={deleteProduct}><DeleteOutlined /></button>
            <h1 className={s.title}>{product.title}</h1>
            <p className={s.price}> {product.price}</p>
            <button type="button" onClick={editProduct} className={s.put__btn}>Редактироват</button>
            <button onClick={postCart} className={s.bascet__btn}> Добавить в корзину</button>
            <button className={s.bascet__btn}> Добавить в корзину</button>
        </li>
    )
}
export default ProductCard;