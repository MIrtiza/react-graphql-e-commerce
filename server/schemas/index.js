const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../db.json");

const ProductType = require("./TypeDefs/userTypes");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllProducts: {
      type: new GraphQLList(ProductType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: ProductType,
      args: {
        title: { type: GraphQLString },
        description:{type: GraphQLString},
        category: {type: GraphQLString},
        image:{type: GraphQLString},
        price: { type: GraphQLInt },
        color: { type: new GraphQLList(GraphQLString)  },
        size: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          title: args.title,
          description: args.description,
          category: args.category,
          image: args.image,
          price: args.price,
          color: args.color,
          size: args.size,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
