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
      console.log(user);
      return user?.cartItems;
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  createOrder: async (_: any, { input }: any) => {
    try {
      const order = await db.orders.create({ data: { ...input } });
      return order;
    } catch (e) {
      console.log(e);
    }
  },
};

export const resolvers = { mutations, queries };
