import express from 'express';
import { checkout } from '../controllers/paymentController';

const router = express.Router();

router.route('/checkout').post(checkout);

router.route('/redirect').post((req, res) => {
  res.redirect('http://localhost:5173/orders');
});

export default router;
