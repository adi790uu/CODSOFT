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
exports.resolvers = void 0;
const db_1 = require("../../lib/db");
const queries = {
    getBookById: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
        const book = db_1.db.book.findUnique({
            where: {
                id: id,
            },
            include: {
                comments: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        if (book) {
            return book;
        }
    }),
    getBooks: (_) => __awaiter(void 0, void 0, void 0, function* () {
        const books = yield db_1.db.book.findMany({
            include: {
                comments: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        console.log(books);
        if (books)
            return books;
    }),
};
const mutations = {
    createBook: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(input);
            const newBook = yield db_1.db.book.create({ data: Object.assign({}, input) });
            return newBook;
        }
        catch (error) {
            console.log(error);
            throw new Error();
        }
    }),
    updateBook: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedBook = yield db_1.db.book.update({
                where: {
                    id: input.id,
                },
                data: Object.assign({}, input),
            });
            return updatedBook;
        }
        catch (error) {
            console.log(error);
        }
    }),
    updateRating: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedBook = yield db_1.db.book.update({
                where: {
                    id: input.id,
                },
                data: Object.assign({}, input),
            });
            return updatedBook;
        }
        catch (error) {
            console.log(error);
        }
    }),
    deleteBook: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield db_1.db.book.delete({
                where: {
                    id: id,
                },
            });
            return 'Deleted';
        }
        catch (error) {
            console.log(error);
        }
    }),
    createReview: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(input);
            const review = yield db_1.db.comment.create({
                data: Object.assign({}, input),
            });
            return review;
        }
        catch (error) {
            console.log(error);
        }
    }),
};
exports.resolvers = { mutations, queries };
