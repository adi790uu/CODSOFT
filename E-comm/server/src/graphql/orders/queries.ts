export const queries = `#graphql
    getOrders(id: ID!): [Order]
    getCart(input: getCartInput): [getCart]
`;
