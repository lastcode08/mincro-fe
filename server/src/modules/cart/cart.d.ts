import { TProduct } from 'src/products';

export type TCartItem = {
  quantity: number;
} & TProduct;

export type TCart = {
  cartItems: TCartItem[];
};
