import { DeleteOutlined } from '@ant-design/icons'
import s from './style.module.scss'
import { ProductCardType } from '../type'
import { Link } from 'react-router-dom'
const ProductCard: React.FC<ProductCardType> = (
    { product,
        readProduct,
        deleteProduct,
        postCart,
    }) => {
    return (
        <li className={s.card} key={product.id}>
            <img onClick={readProduct} className={s.card__picture} src={product.image} alt="" />
            <button type="button" onClick={deleteProduct}><DeleteOutlined /></button>
            <h1>{product.title}</h1>
            <p> {product.price}</p>
            <Link to={`/edit-product/${product.id}`} className={s.upDate}>Редактировать</Link>
            <button onClick={postCart} className={s.forBascet}> Добавить в корзину</button>
        </li>
    )
}
export default ProductCard;