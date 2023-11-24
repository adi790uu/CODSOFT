"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql
    type User {
        id: ID!,
        name: String!,
        email: String!,
        address: String
        orders: [Order]
        token: String!
        otp: String
    }
`;
