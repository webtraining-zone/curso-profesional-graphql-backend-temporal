const {Prisma} = require('prisma-binding');

const typeDefs = require('./../generated/prisma-client/prisma-schema').typeDefs;

const db = new Prisma({
  typeDefs,
  endpoint: 'https://us1.prisma.sh/alex-arriaga-5d13f1/graphql-library/dev',
  debug: false,
});

module.exports = db;
