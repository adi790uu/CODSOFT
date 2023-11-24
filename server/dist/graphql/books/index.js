"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mutations_1 = require("./mutations");
const typedefs_1 = require("./typedefs");
const resolvers_1 = require("./resolvers");
const queries_1 = require("./queries");
exports.Book = { mutations: mutations_1.mutations, typedefs: typedefs_1.typedefs, resolvers: resolvers_1.resolvers, queries: queries_1.queries };
