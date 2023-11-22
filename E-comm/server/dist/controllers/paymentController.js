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
exports.checkout = void 0;
const index_1 = require("../index");
const db_js_1 = require("../lib/db.js");
require('dotenv').config();
const checkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('checkout');
        console.log(req.body.price);
        const options = {
            amount: Number(req.body.price * 100),
            currency: 'INR',
        };
        const user = yield db_js_1.db.user.findUnique({
            where: {
                id: req.body.userId,
            },
            include: {
                cartItems: true,
            },
        });
        const order = yield index_1.instance.orders.create(options);
        console.log(order);
        console.log(user === null || user === void 0 ? void 0 : user.cartItems);
        //@ts-ignore
        if (order) {
            //@ts-ignore
            for (const cartItem of user.cartItems) {
                yield db_js_1.db.orders.create({
                    data: {
                        //@ts-ignore
                        userId: user.id,
                        bookId: cartItem.bookId,
                        quantity: cartItem.quantity,
                        payId: order.id,
                    },
                });
                yield db_js_1.db.book.update({
                    where: { id: cartItem.bookId },
                    data: {
                        bought: {
                            increment: 1,
                        },
                    },
                });
                yield db_js_1.db.cartItem.delete({
                    where: {
                        id: cartItem.id,
                    },
                });
            }
        }
        res.status(200).json({
            success: true,
            order,
        });
    }
    catch (e) {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }
});
exports.checkout = checkout;
