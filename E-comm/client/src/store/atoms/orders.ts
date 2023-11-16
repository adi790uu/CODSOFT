import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const orderState = atom({
  key: 'orderState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
