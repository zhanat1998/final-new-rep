import Navbar from "../navbar";
import { logout } from "../../store/login/slice";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getProductsAction } from "../../store/shop/action";
import s from './style.module.scss'
import { Link } from "react-router-dom";
const Header = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.loginReducer.token)
    const handleLogout = () => {
        dispatch(logout());
        dispatch(getProductsAction());
    };
    return (
        <header>
            <Navbar />
            <div className={s.forToken}>  {token ? <div> <button className={s.logIn} onClick={handleLogout}>Выйти</button> </div> : <div>
                <Link className={s.logIn} to={'/login'}>Войти</Link></div>}</div>
        </header>

    )
}
export default Header;