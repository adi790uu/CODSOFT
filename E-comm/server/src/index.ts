import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import createGraphqlServer from './graphql';
import UserService from './services/user';
import cors from 'cors';
import paymentRoute from './routes/paymentRoutes.js';
import Razorpay from 'razorpay';

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY || '',
  key_secret: process.env.RAZORPAY_API_SECRET,
});

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());
  app.use(cors());

  app.use('/api', paymentRoute);

  app.get('/api/getkey', (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY }),
  );

  app.use(
    '/graphql',
    expressMiddleware(await createGraphqlServer(), {
      context: async ({ req }) => {
        // @ts-ignore
        const token = req.headers['token'];

        try {
          const user = UserService.decodeJWTToken(token as string);
          return { user };
        } catch (error) {
          return {};
        }
      },
    }),
  );

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
