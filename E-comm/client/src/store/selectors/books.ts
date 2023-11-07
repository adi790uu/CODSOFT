import { selector } from 'recoil';
import { booksState } from '../atoms/books';

export const useBooks = selector({
  key: 'useBooks',
  get: ({ get }) => {
    const books = get(booksState);
    return books;
  },
});
