"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql
    
    input getCartInput {
        userId: ID!
    }

    type getCart {
        userId: ID!
        book: Book!
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

    input updateQuantity {
        userId: ID!
        bookId: ID!
    }
`;
