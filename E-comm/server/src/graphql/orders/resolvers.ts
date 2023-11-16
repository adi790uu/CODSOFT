import { db } from '../../lib/db';

const queries = {
  getCart: async (_: any, { input }: any) => {
    try {
      console.log(input);
      const user = await db.user.findUnique({
        where: {
          id: input.userId,
        },
        include: {
          cartItems: {
            select: {
              id: true,
              quantity: true,
              book: {
                select: {
                  id: true,
                  title: true,
                  imageUrl: true,
                  price: true,
                },
              },
            },
          },
        },
      });

      return user?.cartItems;
    } catch (error) {
      console.log(error);
    }
  },

  getOrders: async (_: any, { id }: any) => {
    try {
      console.log('Here' + id);
      const user = await db.user.findUnique({
        where: {
          id: id,
        },
        include: {
          orders: {
            include: {
              book: true,
            },
          },
        },
      });
      // console.log(user?.orders);
      return user?.orders;
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  updateQuantity: async (_: any, { input }: any) => {
    try {
      if (input.inc === true) {
        await db.cartItem.update({
          where: {
            unique_user_book: {
              userId: input.userId,
              bookId: input.bookId,
            },
          },
          data: {
            quantity: {
              increment: 1,
            },
          },
        });
      } else {
        await db.cartItem.update({
          where: {
            unique_user_book: {
              userId: input.userId,
              bookId: input.bookId,
            },
          },
          data: {
            quantity: {
              decrement: 1,
            },
          },
        });
      }

      return 'Success';
    } catch (error) {
      console.log(error);
    }
  },
};

export const resolvers = { mutations, queries };
