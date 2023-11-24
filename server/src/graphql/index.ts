import { ApolloServer } from '@apollo/server';
import { User } from './users';
import { Book } from './books';
import { Order } from './orders';

async function createGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
        ${User.typedefs}
        ${Book.typedefs}
        ${Order.typedefs}

        type Query {
          ${User.queries}
          ${Book.queries}
          ${Order.queries}
        }

        type Mutation {
            ${User.mutations}
            ${Book.mutations}
            ${Order.mutations}
        }

    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
        ...Book.resolvers.queries,
        ...Order.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
        ...Book.resolvers.mutations,
        ...Order.resolvers.mutations,
      },
    },
  });

  await gqlServer.start();

  return gqlServer;
}

export default createGraphqlServer;
