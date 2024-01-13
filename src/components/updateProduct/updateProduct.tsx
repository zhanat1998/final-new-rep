import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Link, useNavigate, useParams } from "react-router-dom"
import { getProdAction, updateProdAction } from "../../store/shop/action";
import { useForm } from "react-hook-form";
import s from './style.module.scss'
import { submitType } from "../createProduct/createProduct";
import { Product } from "../../store/shop/utils";
const UpdateProduct = () => {
    const prod = useAppSelector((state) => state.shopReducer.product);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { ParamId } = useParams();
    const onSubmit: submitType = (data) => {
        dispatch(updateProdAction({ navigate, ...data }));
    }


    useEffect(() => {
        dispatch(getProdAction(ParamId as string))
    }, [])
    const {

        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm<Product>();


    useEffect(() => {
        reset(prod)
    }, [prod])
    return (


        <div className={s.block}>
            <form className={s.block__form} onSubmit={handleSubmit(onSubmit)} >
                <Link to={'/'} className={s.block__btn}><button type='button'>Отмена</button></Link>
                <div className={s.block__check}>
                    <div className={s.block__photo}>
                        <input type="text" className={s.img}
                            id="inputEmail4" placeholder="Введите ссылку фото" {...register('image')} />
                        <input type="number" hidden={true}{...register('id')} />
                    </div>
                    <div className={s.block__inp}>
                        <input className={s.inp} placeholder='Введите название товара' {...register('title')} />
                        <span className={s.post__error}></span>
                        <input className={s.inp} type="text" placeholder='Введите описание товара' {...register('description')} />
                        <span className={s.post__error}></span>
                        <input className={s.inp} type="number" placeholder='Введите цену товара' {...register('price')} />
                        <span className={s.post__error}></span>
                    </div>
                </div>
                <div>
                    <button className={s.block__btn}>Сохранит</button>
                </div>
            </form>
        </div>

    )
}
export default UpdateProduct;