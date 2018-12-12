const createServer = require('./server');
const db = require('./database');
const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: '*',
  },
}, ({port}) => {
  console.log(`Server started on port ${port} goooooo!`);
});
