const createServer = require('./server');
const db = require('./database');
const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: ['http://localhost:8085', 'https://graphql.webtraining.zone'],
  },
}, ({port}) => {
  console.log(`Server started on port ${port} goooooo!`);
});
