import { useForm } from 'react-hook-form';
import s from './styles.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthorizationProps } from './autorization';

type IformInput = {
    username: string;
    password: string;
    confirmPassword: string;
}
const schema = yup.object({
    username: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
    password: yup.string().required('Поле обязательно').min(6, 'Не менее 6-ти'),
    confirmPassword: yup.string().required('Поле обязательно').min(6, 'Не менее 6-ти')
        .test('passwords-match', 'Пароли должны совподать', function (value) {
            return this.parent.password === value;
        }),
})

const Registration: React.FC<AuthorizationProps> = ({ onSubmit, setIsRegister }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IformInput>({
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
                <input type="password" placeholder="password" {...register('password')} />
                <span className={s.wrapper_error}>{errors?.password?.message}</span>
            </label>
            <label>
                <span>Подтвердите пароль</span>
                <input type="password" placeholder="confirm password" {...register('confirmPassword')} />
                <span className={s.wrapper_error}>{errors?.confirmPassword?.message}</span>
            </label>
            <button>Зарегистрироваться</button>
            <button type='button' onClick={() => setIsRegister(false)}>Есть аккаунт</button>
        </form>
    );
}

export default Registration;