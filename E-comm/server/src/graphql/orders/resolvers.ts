import { db } from '../../lib/db';

const queries = {};

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
