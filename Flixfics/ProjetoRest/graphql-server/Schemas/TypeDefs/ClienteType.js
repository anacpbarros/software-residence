const graphql = require("graphql");

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql

const ClientType = new GraphQLObjectType({
    name: "Cliente",
    fields: () => ({
        id: { type: GraphQLInt},
        nome: { type: GraphQLString},
        sobrenome: { type: GraphQLString},
        email: { type: GraphQLString},
        senha: { type: GraphQLString}
    })
});

module.exports = ClientType;