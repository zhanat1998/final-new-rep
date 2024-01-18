import { useAppDispatch, useAppSelector } from "../../hook";
import Navbar from "../navbar"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProdAction } from "../../store/shop/action";
import s from './style.module.scss'
const ReadProduct: React.FC = () => {
    const prod = useAppSelector((state) => state.shopReducer.product)
    const dispatch = useAppDispatch();
    const { Pid } = useParams();
    useEffect(() => {
        if (Pid) {
            dispatch(getProdAction(Pid as string));
        }
    }, []);
    return (
        <div>
            {/* <section>
                <div className={s.generate} >
                    <ul className={s.childCont}>
                        <li className={s.main}><Link to={'/'}>
                            Вернуться</Link></li>
                        <h1>{prod?.title}</h1>
                        <li className={s.generate__card} key={prod?.id}>
                            <div className={s.generate__forImage}>
                                <img className={s.generate__image}
                                    src={prod?.image} />
                            </div>
                            <div className={s.forText}>
                                <h3>Описание</h3>
                                <br />
                                <p>{prod?.description}</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </section> */}
            <section>
                <div className={s.generate}>
                    <button className={s.main}>Вернуться</button>
                    <h1>{prod.title}</h1>
                    <div className={s.generate__card} key={prod?.id}>
                        <div className={s.generate__forImage}>
                            <img className={s.generate__image}
                                src={prod?.image} />
                        </div>
                        <div className={s.forText}>
                            <h3>Описание</h3>
                            <br />
                            <p>{prod?.description}</p>
                        </div>
                    </div>
                </div>
            </section>



        </div >
    )
}
export default ReadProduct;