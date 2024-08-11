import { queries } from "./query.user.js";
import { mutation } from "./mutation.user.js";
import { resolver } from "./resolver.user.js";
import { typeDefs } from "./typedef.user.js";

export const user = { typeDefs, queries, mutation, resolver };
