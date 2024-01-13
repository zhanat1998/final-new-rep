import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";
import { useForm } from "react-hook-form";
import { createProductAction } from "../../store/shop/action";
import s from './style.module.scss'
import { Product } from "../../store/shop/utils";
export type submitType = (data: Product) => void;
const CreateProduct = () => {
    const dispatch = useAppDispatch();
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

    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm<Product>();


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
                        <input className={s.inp} type="text" placeholder='Введите название товара' {...register('title')} />
                        <input className={s.inp} type="text" placeholder='Введите описание товара' {...register('description')} />
                        <input className={s.inp} type="number" placeholder='Введите цену товара' {...register('price')} />
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