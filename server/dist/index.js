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
exports.instance = void 0;
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const graphql_1 = __importDefault(require("./graphql"));
const user_1 = __importDefault(require("./services/user"));
const cors_1 = __importDefault(require("cors"));
const paymentRoutes_js_1 = __importDefault(require("./routes/paymentRoutes.js"));
const razorpay_1 = __importDefault(require("razorpay"));
exports.instance = new razorpay_1.default({
    key_id: process.env.RAZORPAY_API_KEY || '',
    key_secret: process.env.RAZORPAY_API_SECRET,
});
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = Number(process.env.PORT) || 8000;
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use('/api', paymentRoutes_js_1.default);
        app.get('/api/getkey', (req, res) => res.status(200).json({ key: process.env.RAZORPAY_API_KEY }));
        app.use('/graphql', (0, express4_1.expressMiddleware)(yield (0, graphql_1.default)(), {
            context: ({ req }) => __awaiter(this, void 0, void 0, function* () {
                // @ts-ignore
                const token = req.headers['token'];
                try {
                    const user = user_1.default.decodeJWTToken(token);
                    return { user };
                }
                catch (error) {
                    return {};
                }
            }),
        }));
        app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
    });
}
init();
