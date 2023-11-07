import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import createGraphqlServer from './graphql';
import UserService from './services/user';
import cors from 'cors';

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    res.json({ message: 'Server is up and running' });
  });

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
