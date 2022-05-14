const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = graphql;

const ProductType = new GraphQLObjectType({
  name: "Products",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    description:{type: GraphQLString},
    category: {type: GraphQLString},
    image:{type: GraphQLString},
    price: { type: GraphQLInt },
    color: { type: new GraphQLList(GraphQLString)  },
    size: {  type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = ProductType;
