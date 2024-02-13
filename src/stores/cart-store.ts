import { ProductProps } from '@/utils/data/products';
import { create } from 'zustand';
import * as cartInMemory from './helpers/cart-in-memory';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  remove(id: string): void;
  clear(): unknown;
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
};

export const useCartStore = create<StateProps>((set) => ({
  products: [],

  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
}));