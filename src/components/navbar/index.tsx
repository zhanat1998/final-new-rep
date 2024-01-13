import { removeItem } from "localforage";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();


    const toMain = () => {
        navigate('/')
    }
    const toCart = () => {
        navigate('/cart-products')
    }
    const toLogin = () => {
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={toMain} href="#">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">О нас</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Контакты</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={toCart} href="#">Корзина</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;