import { useState } from "react";
import { Authorization, Registration } from "../../components/login";
import { useAppDispatch } from "../../hook";
import { loginAction, registerAction } from "../../store/login/action";
import { useNavigate } from "react-router-dom";

export type submitType = (data: { username: string; password: string }) => void;

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState<boolean>(false);

    const onSubmit: submitType = (
        data
    ) => {
        if (isRegister) {
            dispatch(registerAction({
                navigate,
                username: data.username,
                password: data.password
            }));
        } else {
            dispatch(loginAction({ navigate, ...data }));
        }
    }

    if (isRegister) return <Registration onSubmit={onSubmit} setIsRegister={setIsRegister} />
    return <Authorization onSubmit={onSubmit} setIsRegister={setIsRegister} />
}

export default LoginPage;