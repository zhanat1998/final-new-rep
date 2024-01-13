import { useAppDispatch, useAppSelector } from "../../hook";
import Navbar from "../navbar"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { readProductAction } from "../../store/shop/action";
import s from './style.module.scss'
import { Product } from "../../store/shop/utils";
const ReadProduct: React.FC<Product> = () => {
    const producta = useAppSelector((state) => state.shopReducer.product)
    const dispatch = useAppDispatch();
    console.log(producta, 'prod')
    const { Pid } = useParams();
    console.log(Pid, 'pid ')
    useEffect(() => {
        if (Pid) { dispatch(readProductAction(Pid as string)) }
    }, [Pid])
    return (
        <div>
            <Navbar />
            <section>
                <div className={s.container} >
                    <div className={s.info} >
                        <ul className={s.ul}>
                            <li className={s.main}><Link to={'/'}>Вернуться</Link></li>
                            <h1 className={s.info__title} >{producta.title}</h1>
                            <li className={s.info__card} key={producta.id}>
                                <div className={s.info__div}>
                                    <img className={s.info__image} src={producta.image} />
                                </div>
                                <div className={s.description}>
                                    <p className={s.info__desc}><h3>Описание</h3> <br />{producta.description}</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>




        </div >
    )
}
export default ReadProduct;