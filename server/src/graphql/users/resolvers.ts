import UserService, { CreateUserPayload } from '../../services/user';

const queries = {
  loginUser: async (_: any, payload: { email: string; password: string }) => {
    const user = await UserService.loginUser({
      email: payload.email,
      password: payload.password,
    });
    return user;
  },

  getCurrentLoggedInUser: async (_: any, parameters: any, context: any) => {
    if (context && context.user) {
      const id = context.user.id;
      const user = await UserService.getUserById(id);
      return user;
    }
    throw new Error('I dont know who are you');
  },
};

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = await UserService.createUser(payload);
    console.log(res);

    const details = {
      id: res?.id,
      name: res?.name,
      email: res?.email,
      address: res?.address,
    };
    console.log(details);
    return details;
  },
};

export const resolvers = { queries, mutations };
