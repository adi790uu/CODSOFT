"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `#graphql
    loginUser(email: String!, password: String!): User
    getCurrentLoggedInUser: User
`;
