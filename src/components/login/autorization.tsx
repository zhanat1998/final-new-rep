import { useForm } from 'react-hook-form';
import s from './styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
    password: yup.string().required('Поле обязательно').min(6, 'Не менее 6-ти'),
})
export type IFormInput = {
    username: string;
    password: string;
}
export type AuthorizationProps = ({
    onSubmit: (data: { username: string; password: string }) => void,
    setIsRegister: (p: boolean) => void;
})

const Authorization: React.FC<AuthorizationProps> = ({ onSubmit, setIsRegister }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
            <label>
                <span>Имя пользователя</span>
                <input type="text" placeholder="user name" {...register('username')} />
                <span className={s.wrapper_error}>{errors?.username?.message}</span>
            </label>
            <label>
                <span>Пароль</span>
                <input type="text" placeholder="password" {...register('password')} />
                <span className={s.wrapper_error}>{errors?.password?.message}</span>
            </label>
            <button>Авторизоваться</button>
            <button type='button' onClick={() => setIsRegister(true)}>Нет аккаунта</button>
        </form>
    );
}

export default Authorization;