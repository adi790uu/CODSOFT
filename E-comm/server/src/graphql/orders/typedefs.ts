export const typedefs = `#graphql
    
    input getCart {
        userId: ID!
    }

    type Cart {
        userId: ID!
        book: Book
        quantity: Int!
    }

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
