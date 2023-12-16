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
    deleteBook: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield db_1.db.orders.deleteMany({
                where: {
                    bookId: input,
                },
            });
            yield db_1.db.comment.deleteMany({
                where: {
                    bookId: input,
                },
            });
            yield db_1.db.book.delete({
                where: {
                    id: input,
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
            const book = yield db_1.db.book.findUnique({
                where: {
                    id: input.bookId,
                },
            });
            let rating = book === null || book === void 0 ? void 0 : book.rating;
            rating = (rating + input.rating) / 2;
            yield db_1.db.book.update({
                where: {
                    id: input.bookId,
                },
                data: {
                    rating: Math.ceil(rating),
                },
            });
            const review = yield db_1.db.comment.create({
                data: Object.assign({}, input),
                include: {
                    user: true,
                },
            });
            return 'Success';
        }
        catch (error) {
            console.log(error);
        }
    }),
    addToCart: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(payload);
            const existingUser = yield db_1.db.user.findUnique({
                where: {
                    id: payload.input.userId,
                },
            });
            if (!existingUser) {
                throw new Error('User not found');
            }
            const Item = yield db_1.db.cartItem.findUnique({
                where: {
                    unique_user_book: {
                        userId: payload.input.userId,
                        bookId: payload.input.bookId,
                    },
                },
            });
            if (Item) {
                const cartItem = yield db_1.db.cartItem.update({
                    where: {
                        unique_user_book: {
                            userId: payload.input.userId,
                            bookId: payload.input.bookId,
                        },
                    },
                    data: {
                        quantity: {
                            increment: 1,
                        },
                    },
                    include: {
                        book: true,
                    },
                });
                return cartItem;
            }
            const cartItem = yield db_1.db.cartItem.create({
                data: Object.assign({}, payload.input),
                include: {
                    book: true,
                },
            });
            return cartItem;
        }
        catch (error) {
            console.log(error);
        }
    }),
};
exports.resolvers = { mutations, queries };
