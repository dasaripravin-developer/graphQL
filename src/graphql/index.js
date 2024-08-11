import { ApolloServer } from "@apollo/server";
import { user } from "./user/index.js";

export async function startApolloServer() {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: `
        ${user.typeDefs}
        type Query {
            ${user.queries}
        }

        type Mutation {
            ${user.mutation}
        }
    `,
    resolvers: {
      Query: {
        ...user.resolver.queries,
      },
      Mutation: {
        ...user.resolver.mutation,
      },
    },
  });

  await server.start();
  return server;
}
