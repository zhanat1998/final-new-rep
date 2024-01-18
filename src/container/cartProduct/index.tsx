import { useAppDispatch, useAppSelector } from "../../hook"
import { getCartAction, removeAllCartAction } from "../../store/cart/action"
import { useEffect } from "react"
import CartProducts from "../../components/cartProduct/cartProduct"

const CartProductsContainer = () => {
    const dispatch = useAppDispatch();
    const deleteAllCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(removeAllCartAction())
            .then(() => dispatch(getCartAction()))
    }
    const cart = useAppSelector((state) => state.cartReducer.data);
    useEffect(() => { dispatch(getCartAction()) },
        []);

    return (
        <CartProducts cart={cart} deleteAllCart={deleteAllCart} />
    );

}
export default CartProductsContainer;
