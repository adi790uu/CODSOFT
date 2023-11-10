"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const users_1 = require("./users");
const books_1 = require("./books");
const orders_1 = require("./orders");
function createGraphqlServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const gqlServer = new server_1.ApolloServer({
            typeDefs: `
        ${users_1.User.typedefs}
        ${books_1.Book.typedefs}
        ${orders_1.Order.typedefs}

        type Query {
          ${users_1.User.queries}
          ${books_1.Book.queries}
          ${orders_1.Order.queries}
        }

        type Mutation {
            ${users_1.User.mutations}
            ${books_1.Book.mutations}
            ${orders_1.Order.mutations}
        }

    `,
            resolvers: {
                Query: Object.assign(Object.assign(Object.assign({}, users_1.User.resolvers.queries), books_1.Book.resolvers.queries), orders_1.Order.resolvers.queries),
                Mutation: Object.assign(Object.assign(Object.assign({}, users_1.User.resolvers.mutations), books_1.Book.resolvers.mutations), orders_1.Order.resolvers.mutations),
            },
        });
        yield gqlServer.start();
        return gqlServer;
    });
}
exports.default = createGraphqlServer;
