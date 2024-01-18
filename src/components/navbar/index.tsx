import { Link } from "react-router-dom";
import s from './style.module.scss'
const Navbar = () => {
    const toMain = '/';
    const toCart = '/cart-products'
    return (
        <nav>
            <div className={s.navbar}>
                <ul className={s.navbar__list}>
                    <li className={s.navbar__item} >
                        <Link className={s.navbar__link}
                            to={toMain}>Главная</Link></li >
                    <li className={s.navbar__item}>
                        <a className={s.navbar__link}
                            href="#">О нас</a></li>
                    <li className={s.navbar__item}>
                        <a className={s.navbar__link}
                            href="#">Контакты</a></li>
                    <li className={s.navbar__item}>
                        <Link className={s.navbar__link}
                            to={toCart} >Корзина</Link></li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar;