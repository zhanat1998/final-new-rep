import { Product } from "../store/shop/typeShop";
import { CartItem } from "../store/cart";
export type MainPageType = {
    products: Product[];
    handleSortPrice: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleSortNew: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleSortOld: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleReset: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export type CartDataType = {
    cart: CartItem[];
    deleteAllCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export type submitType = (data: Product) => void;

export type ProductCardType = {
    product: Product;
    readProduct: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    postCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    deleteProduct: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
