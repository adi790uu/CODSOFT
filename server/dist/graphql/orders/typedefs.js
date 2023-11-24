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
        id: ID!
        book: Book!
        quantity: Int!
        status: Boolean!
    }

    input updateQuantity {
        userId: ID!
        bookId: ID!
        inc: Boolean
    }
`;
