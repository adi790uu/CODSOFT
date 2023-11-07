"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql

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
