"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentController_1 = require("../controllers/paymentController");
const router = express_1.default.Router();
router.route('/checkout').post(paymentController_1.checkout);
router.route('/redirect').post((req, res) => {
    res.redirect('http://localhost:5173/orders');
});
exports.default = router;
