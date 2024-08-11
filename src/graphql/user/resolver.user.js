const users = [];

const queries = {
  getUsers: () => users,
  getUser: async (parent, parameters, context) =>
    await users.find((u) => u.email === parameters.email),
};

const mutation = {
  createUser: async (parent, payload) => {
    console.log("payload => ", payload);
    users.push(payload);
    return payload;
  },
};

export const resolver = { queries, mutation };
