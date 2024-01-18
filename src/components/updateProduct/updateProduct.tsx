import { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Link, useNavigate, useParams } from "react-router-dom"
import { getProdAction, updateProdAction } from "../../store/shop/action";
import { useForm } from "react-hook-form";
import s from './style.module.scss'
import { submitType } from "../type";
import { Product } from "../../store/shop/typeShop";
import { changeProductImage } from "../../store/shop/slice";
import { productValidation } from "../../utils";
import { yupResolver } from "@hookform/resolvers/yup";
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
        reset } =
        useForm<Product>(
            { resolver: yupResolver(productValidation) }
        );

    useEffect(() => {
        reset(prod)
    }, [prod])

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeProductImage(e.target.value));
    }
    return (
        <div className={s.main}>
            <form className={s.main__productForm} onSubmit={handleSubmit(onSubmit)} >
                <Link to={'/'} className={s.main__btn}><button type='button'>Отмена</button></Link>
                <div className={s.main__check}>
                    <div className={s.main__photo}>
                        <img src={prod.image} className={s.photo} />
                    </div>
                    <div className={s.main__generateInput}>
                        <input type="text" className={s.textInput}
                            id="inputEmail4" placeholder="Введите ссылку фото" {...register('image', { onChange: handleImageChange })} />
                        <input type="number" hidden={true}{...register('id')} />
                        <input className={s.textInput} placeholder='Введите название товара' {...register('title')} />
                        <span className={s.post__error}>{errors?.title?.message}</span>
                        <input className={s.textInput} type="text" placeholder='Введите описание товара' {...register('description')} />
                        <span className={s.post__error}>{errors?.description?.message}</span>
                        <input className={s.textInput} type="number" placeholder='Введите цену товара' {...register('price')} />
                        <span className={s.post__error}>{errors?.price?.message}</span>
                    </div>
                </div>
                <div>
                    <Link to={'/'} className={s.main__buttonSubmit}><button type='button'>сохранить</button></Link>
                </div>
            </form>
        </div>

    )
}
export default UpdateProduct;