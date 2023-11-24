import { selector } from 'recoil';
import { orderState } from '../atoms/orders';
export const useOrder = selector({
  key: 'useOrder',
  get: ({ get }) => {
    const items = get(orderState);
    return items;
  },
});
