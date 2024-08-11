import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import bodyParser from "body-parser";
import { startApolloServer } from "./graphql/index.js";
import axios from "axios";

/* // Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Todos: {
    user: async (todo) => {
      //   let response = await axios.get(
      //     `https://jsonplaceholder.typicode.com/users/${todo.id}`
      //   );
      //   response.status == 4 ? console.log('response => ', response) : ''
      //   return response.status != 200 ?  'PRAVIN' : response.data;
      return {
        id: "1",
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
      };
    },
  },
  Query: {
    todos: async () => {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      return response.data;
    },
    getAllUsers: async () => {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log("response => ", response);
      return response.data;
    },
    getUser: async (parent, { id }) => {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data;
    },
    getTodo: async (parent, { id }) => {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      return response.data;
    },
  },
}; */

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
/* const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Totos" type defines the queryable fields for every book in our data source.

    type User {
        id: ID!,
        name: String!,
        phone: String!,
        website: String
    }

  type Todos {
    id: ID!
    title: String!
    completed: Boolean!,
    user: User
  }


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    todos: [Todos],
    getTodo(id: ID!): Todos,
    getAllUsers: [User],
    getUser(id: ID!): User
  }
`; */

async function startServer() {
  const app = express();
  app.use(bodyParser.json());
  // Passing an ApolloServer instance to the `expressMiddleware` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests

  app.use("/graphql", expressMiddleware(await startApolloServer()));
  app.listen(8000, () => console.log("server started at : 8000"));
}

startServer();
