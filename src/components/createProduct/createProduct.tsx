import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";
import { useForm } from "react-hook-form";
import { createProductAction } from "../../store/shop/action";
import { Product } from "../../store/shop/typeShop";
import s from './style.module.scss'
import { submitType } from "../type";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { productValidation } from "../../utils";
const CreateProduct = () => {
    const [imageSource, setImageSource] = useState('')
    const dispatch = useAppDispatch();
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImageSource(e.target.value)
    }
    const navigate = useNavigate();
    const onSubmit: submitType = (data) => {
        const product = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image,
            id: data.id,
        }
        dispatch(createProductAction({ navigate, ...product }));
    }
    const { register,
        handleSubmit,
        formState: { errors } } = useForm<Product>(
            { resolver: yupResolver(productValidation) }
        );
    return (
        <div className={s.block}>
            <form className={s.block__form} onSubmit={handleSubmit(onSubmit)} >
                <Link to={'/'} className={s.block__btn}><button type='button'>Отмена</button></Link>
                <div className={s.block__check}>
                    <div className={s.block__photo}>
                        <img src={imageSource} className={s.img} />

                    </div>

                    <div className={s.block__inp}>
                        <input type="text" className={s.inp}
                            id="inputEmail4" placeholder="Введите ссылку фото" {...register('image', { onChange: handleImageChange })} />
                        <input type="number" hidden={true}{...register('id')} />
                        <input className={s.inp} type="text" placeholder='Введите название товара' {...register('title')} />
                        <span className={s.post__error}>{errors?.title?.message}</span>
                        <input className={s.inp} type="text" placeholder='Введите описание товара' {...register('description')} />
                        <span className={s.post__error}>{errors?.description?.message}</span>
                        <input className={s.inp} type="number" placeholder='Введите цену товара' {...register('price')} />
                        <span className={s.post__error}>{errors?.price?.message}</span>
                    </div>
                </div>
                <div>
                    <button className={s.block__btn} type='submit'>Сохранит</button>
                </div>
            </form>
        </div>


    )
}
export default CreateProduct;