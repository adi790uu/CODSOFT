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
const db_1 = require("../lib/db");
const node_crypto_1 = require("node:crypto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const uuid_1 = require("uuid");
const SECRET = 'TRabdom2ejed';
class UserService {
    static generateHash(salt, password) {
        const hashedPassword = (0, node_crypto_1.createHmac)('sha256', salt)
            .update(password)
            .digest('hex');
        return hashedPassword;
    }
    static getUserById(id) {
        return db_1.db.user.findUnique({
            where: { id },
            include: {
                orders: true,
            },
        });
    }
    static createUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, address } = payload;
            const salt = (0, node_crypto_1.randomBytes)(32).toString('hex');
            const hashedPassword = UserService.generateHash(salt, password);
            const newUser = yield db_1.db.user.create({
                data: {
                    name,
                    email,
                    salt,
                    password: hashedPassword,
                    address,
                },
            });
            if (newUser) {
                // const otp = await UserService.sendOTP(email);
                const data = Object.assign({}, newUser);
                return data;
            }
        });
    }
    static getUserByEmail(email) {
        return db_1.db.user.findUnique({ where: { email } });
    }
    static sendOTP(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASS,
                },
            });
            const uuid = (0, uuid_1.v4)();
            const otp = (0, uuid_1.v4)();
            function main() {
                return __awaiter(this, void 0, void 0, function* () {
                    const info = yield transporter.sendMail({
                        from: process.env.NODEMAILER_USER,
                        to: email,
                        subject: 'Registration',
                        html: `<h3>Your OTP: ${otp}</h3>`,
                    });
                    console.log('Registration message sent: %s', info.messageId);
                });
            }
            yield main();
            return otp;
        });
    }
    static loginUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = payload;
            const user = yield UserService.getUserByEmail(email);
            if (!user)
                throw new Error('user not found');
            const userSalt = user.salt;
            const usersHashPassword = UserService.generateHash(userSalt, password);
            if (usersHashPassword !== user.password)
                throw new Error('Incorrect Password');
            return user;
        });
    }
    static decodeJWTToken(token) {
        return jsonwebtoken_1.default.verify(token, SECRET);
    }
}
exports.default = UserService;
