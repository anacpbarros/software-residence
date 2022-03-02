const graphql = require("graphql");
const ClientType = require("./TypeDefs/ClientType");

const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const clientData = require("../demo_data.json");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllClients: { 
            type: new GraphQLList(ClientType),
            args: { id: { type: GraphQLInt}},
            resolve(parent, args) {
                return clientData;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCliente: {
            type: ClientType,
            args: {
                nome: { type: GraphQLString },
                sobrenome: { type: GraphQLString },
                email: { type: GraphQLString },
                senha: { type: GraphQLString }
            },
            resolve(parents, args) {
                clientData.push({
                    id: clientData.length + 1,
                    nome: args.nome,
                    sobrenome: args.sobrenome,
                    email: args.email,
                    senha: args.senha
                })
                return args;
            }
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});