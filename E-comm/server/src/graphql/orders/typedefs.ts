export const typedefs = `#graphql

    type Order {
        userId: ID!
        bookId: ID!
        quantity: Int!
        status: Boolean!
    }

    input createOrder {
        userId: ID!
        bookId: ID!
        quantity: Int!
        status: Boolean!
    }
`;
