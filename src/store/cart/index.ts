import { Product } from "../shop/typeShop"

export type CartItem = {
    product: Product;
    quantity: number;
}

type InitialState = {
    error: string;
    isLoad: boolean;
    data: CartItem[];

}

export type CartRequest = {
    product: number;
    quantity: number;
    navigate: (path: string) => void;
}

export const initialState: InitialState = {
    error: '',
    isLoad: false,
    data: []
}