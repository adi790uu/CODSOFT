import UserService, { CreateUserPayload } from '../../services/user';

const queries = {
  getUserToken: async (
    _: any,
    payload: { email: string; password: string },
  ) => {
    const token = await UserService.getUserToken({
      email: payload.email,
      password: payload.password,
    });
    return token;
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
      token: res?.token,
      otp: res?.otp,
    };
    console.log(details);
    return details;
  },
};

export const resolvers = { queries, mutations };
