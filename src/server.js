const {GraphQLServer} = require('graphql-yoga');

const Mutation = require('./mutation');
const Query = require('./query');
const db = require('./database');

const resolvers = {
  Query,
  Mutation,
};

const createServer = () => {
  return new GraphQLServer({
    // Public facing API
    typeDefs: 'src/schema/graphql-yoga-schema.graphql',
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: request => ({...request, db}),
  });
};

module.exports = createServer;
