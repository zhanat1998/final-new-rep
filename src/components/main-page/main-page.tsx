import s from './style.module.scss'
import ProductCardContainer from "../../container/product";
import { Link } from 'react-router-dom';
import SearchBar from '../../components/searchBar/searchBar';
import { MainPageType } from '../../components/type';
import Header from '../../components/header/header';
const MainPage: React.FC<MainPageType> = ({
    products,
    handleReset,
    handleSortPrice,
    handleSortNew,
    handleSortOld, }) => {
    return (
        <div className={s.container}>
            <Header />
            <SearchBar />
            <div className={s.generateSorting}>
                <h5>Сортировать по:</h5>
                <button className={s.sort} onClick={handleSortPrice} >Ценам</button>
                <button className={s.sort} onClick={handleSortNew} >Сначала новые</button>
                <button className={s.sort} onClick={handleSortOld}>Сначала старые</button>
                <button className={s.sort} onClick={handleReset} >Без фильтров</button>
            </div>

            <ul className={s.main__card}>
                {products.map((product) => <ProductCardContainer {...product} key={product.id} />)}
            </ul>
            <ul className={s.generalAddForButton}>
                <Link className={s.addButton} to={'/add-product'}>Создать товар</Link>
            </ul>

        </div>
    )
}
export default MainPage; 