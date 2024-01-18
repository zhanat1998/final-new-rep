import EachCart from "../eachCart/each-cart"
import Navbar from "../navbar"
import { CartDataType } from "../type"
import s from './style.module.scss'

const CartProducts: React.FC<CartDataType> = ({ cart, deleteAllCart }) => {
    return (
        <div className={s.container}>
            <Navbar />
            <h3>Корзина</h3>
            <button onClick={deleteAllCart} className={s.removeCart} >очистить корзину</button>
            <div className={s.cartProducts}>
                {cart.map(item => <EachCart {...item} key={item.product.id} />)}
            </div>

        </div>
    )
}
export default CartProducts;