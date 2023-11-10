import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'userState',
  default: {
    email: '',
    name: '',
    id: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const OtpState = atom({
  key: 'OtpState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
