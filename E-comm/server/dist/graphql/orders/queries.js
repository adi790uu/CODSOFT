"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `#graphql
    # getCurrentOrdersByUserId(id: ID!)
    # getPastOrdersByUserId(id: ID!)
    getCart(input: getCartInput): [getCart]
`;
