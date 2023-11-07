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

  deleteBook: async (_: any, { id }: { id: string }) => {
    try {
      await db.book.delete({
        where: {
          id: id,
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
      const review = await db.comment.create({
        data: { ...input },
      });

      return review;
    } catch (error) {
      console.log(error);
    }
  },
};

export const resolvers = { mutations, queries };
