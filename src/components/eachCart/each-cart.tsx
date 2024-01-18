import React from "react";
import { useAppDispatch } from "../../hook";
import { getCartAction, removeFromCartAction } from "../../store/cart/action";
import { CartItem } from "../../store/cart";
import s from './style.module.scss'

const EachCart: React.FC<CartItem> = (item) => {
    const dispatch = useAppDispatch();
    const deleteCart = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(removeFromCartAction(item.product.id))
            .then(() => dispatch(getCartAction()))
    }

    return (
        <div className={s.cart}>
            <img src={item.product.image} className={s.cartImage} alt="" />
            <div className={s.cartGeneral}>
                <h5 className={s.cartName}>{item.product.title}</h5>
                <p className={s.cartPrice}>{item.product.price}</p>
                <a href="#" onClick={deleteCart} className={s.removeFromCart}>удалить из корзины</a>
            </div>
        </div>
    )
}
export default EachCart;