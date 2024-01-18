import * as yup from "yup";

const productValidationSchema = {
    title: yup.string().required('Поле обязательно'),
    description: yup.string().required('Поле обязательно'),
    price: yup.string().required('Поле обязательно').min(1, '').max(3, 'цена должна содержать не более 3 символов'),
};
export const productValidation = yup.object(productValidationSchema)