export type Prod = {
    title: string;
    description: string;
    price: string;
    image: string;
}
export type Product = {
    title: string;
    description: string;
    price: string;
    id: number | string;
    image: string;
}
type InitialStateType = {
    products: Product[];
    product: {
        image: string;
        price: string;
        id: number | string;
        title: string;
        description: string;
    };
    isLoad: boolean;
    error: string;
}

export const initialState: InitialStateType = {
    error: '',
    isLoad: false,
    products: [],
    product: {
        title: '',
        description: '',
        price: '',
        id: 0,
        image: '',
    },

}

