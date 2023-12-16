import { db } from '../../lib/db';
const queries = {
  getBookById: async (_: any, { id }: { id: string }) => {
    const book = db.book.findUnique({
      where: {
        id: id,
      },
      include: {
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
    if (book) {
      return book;
    }
  },

  getBooks: async (_: any) => {
    const books = await db.book.findMany({
      include: {
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
    console.log(books);
    if (books) return books;
  },
};

const mutations = {
  createBook: async (_: any, { input }: any) => {
    try {
      console.log(input);
      const newBook = await db.book.create({ data: { ...input } });
      return newBook;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  },

  updateBook: async (_: any, { input }: any) => {
    try {
      const updatedBook = await db.book.update({
        where: {
          id: input.id,
        },
        data: { ...input },
      });

      return updatedBook;
    } catch (error) {
      console.log(error);
    }
  },

  updateRating: async (_: any, { input }: any) => {
    try {
      const updatedBook = await db.book.update({
        where: {
          id: input.id,
        },
        data: { ...input },
      });

      return updatedBook;
    } catch (error) {
      console.log(error);
    }
  },

  deleteBook: async (_: any, { input }: any) => {
    try {
      await db.orders.deleteMany({
        where: {
          bookId: input,
        },
      });
      await db.comment.deleteMany({
        where: {
          bookId: input,
        },
      });
      await db.book.delete({
        where: {
          id: input,
        },
      });

      return 'Deleted';
    } catch (error) {
      console.log(error);
    }
  },

  createReview: async (_: any, { input }: any) => {
    try {
      console.log(input);

      const book = await db.book.findUnique({
        where: {
          id: input.bookId,
        },
      });

      let rating = book?.rating;
      rating = (rating + input.rating) / 2;

      await db.book.update({
        where: {
          id: input.bookId,
        },
        data: {
          rating: Math.ceil(rating),
        },
      });

      const review = await db.comment.create({
        data: { ...input },
        include: {
          user: true,
        },
      });

      return 'Success';
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (_: any, payload: any) => {
    try {
      console.log(payload);
      const existingUser = await db.user.findUnique({
        where: {
          id: payload.input.userId,
        },
      });

      if (!existingUser) {
        throw new Error('User not found');
      }

      const Item = await db.cartItem.findUnique({
        where: {
          unique_user_book: {
            userId: payload.input.userId,
            bookId: payload.input.bookId,
          },
        },
      });
      if (Item) {
        const cartItem = await db.cartItem.update({
          where: {
            unique_user_book: {
              userId: payload.input.userId,
              bookId: payload.input.bookId,
            },
          },
          data: {
            quantity: {
              increment: 1,
            },
          },
          include: {
            book: true,
          },
        });

      
        return cartItem;
      }
      const cartItem = await db.cartItem.create({
        data: {
          ...payload.input,
        },
        include: {
          book: true,
        },
      });
    
      return cartItem;
    } catch (error) {
      console.log(error);
    }
  },
};

export const resolvers = { mutations, queries };
