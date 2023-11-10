import { selector } from 'recoil';
import { userState } from '../atoms/user';
import { OtpState } from '../atoms/user';

export const useUser = selector({
  key: 'useUser',
  get: ({ get }) => {
    const user = get(userState);
    return user;
  },
});

export const useOtp = selector({
  key: 'useOtp',
  get: ({ get }) => {
    const otp = get(OtpState);
    return otp;
  },
});
