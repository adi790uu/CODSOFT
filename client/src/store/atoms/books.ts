import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const booksState = atom({
  key: 'booksState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
