import { selector } from 'recoil';
import { cartState } from '../atoms/cart';
export const useCart = selector({
  key: 'useCart',
  get: ({ get }) => {
    const items = get(cartState);
    return items;
  },
});
