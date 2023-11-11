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
    getCart: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(input);
            const user = yield db_1.db.user.findUnique({
                where: {
                    id: input.userId,
                },
                include: {
                    cartItems: {
                        select: {
                            id: true,
                            quantity: true,
                            book: {
                                select: {
                                    id: true,
                                    title: true,
                                    imageUrl: true,
                                    price: true,
                                },
                            },
                        },
                    },
                },
            });
            console.log(user);
            return user === null || user === void 0 ? void 0 : user.cartItems;
        }
        catch (error) {
            console.log(error);
        }
    }),
};
const mutations = {
    createOrder: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield db_1.db.orders.create({ data: Object.assign({}, input) });
            return order;
        }
        catch (e) {
            console.log(e);
        }
    }),
    updateQuantity: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(input.userId);
            const cartItems = yield db_1.db.cartItem.update({
                where: {
                    unique_user_book: {
                        userId: input.userId,
                        bookId: input.bookId,
                    },
                },
                data: {
                    quantity: {
                        increment: 1,
                    },
                },
            });
            console.log(cartItems);
        }
        catch (error) {
            console.log(error);
        }
    }),
};
exports.resolvers = { mutations, queries };
