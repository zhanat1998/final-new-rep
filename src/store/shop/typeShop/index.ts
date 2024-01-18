export type Prod = {
    title: string;
    description: string;
    price: number;
    image: string;
}
export type Product = {
    title: string;
    description: string;
    price: string;
    id: number;
    image: string;
}
type InitialStateType = {
    all: Product[];
    products: Product[];
    product: Product;
    isLoad: boolean;
    error: string;
}

export const initialState: InitialStateType = {
    error: '',
    isLoad: false,
    products: [],
    all: [],
    product: {
        title: '',
        description: '',
        price: "0",
        id: 0,
        image: '',
    },

}

