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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_1 = __importDefault(require("../../services/user"));
const queries = {
    getUserToken: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield user_1.default.getUserToken({
            email: payload.email,
            password: payload.password,
        });
        return token;
    }),
    getCurrentLoggedInUser: (_, parameters, context) => __awaiter(void 0, void 0, void 0, function* () {
        if (context && context.user) {
            const id = context.user.id;
            const user = yield user_1.default.getUserById(id);
            return user;
        }
        throw new Error('I dont know who are you');
    }),
};
const mutations = {
    createUser: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield user_1.default.createUser(payload);
        console.log(res);
        const details = {
            id: res === null || res === void 0 ? void 0 : res.id,
            name: res === null || res === void 0 ? void 0 : res.name,
            email: res === null || res === void 0 ? void 0 : res.email,
            address: res === null || res === void 0 ? void 0 : res.address,
            token: res === null || res === void 0 ? void 0 : res.token,
            otp: res === null || res === void 0 ? void 0 : res.otp,
        };
        console.log(details);
        return details;
    }),
};
exports.resolvers = { queries, mutations };
