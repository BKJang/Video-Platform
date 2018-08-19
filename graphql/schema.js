var Graphql = require("graphql");
import { people, getById, getAll } from "./db"

const Person = new Graphql.GraphQLObjectType({ // Object 타입을 정의합니다.
  name: "Person",
  fields: {
    id: { type: Graphql.Int },
    name: { type: Graphql.String },
    age: { type: Graphql.Int },
    gender: { type: Graphql.String },
  }
});

export const queryType  = new Graphql.GraphQLObjectType({ // Object 타입을 정의합니다.
  name: "Query",
  fields: {
    people: { type: Graphql.Int,
      resolve: getAll()
    },
  }
});

