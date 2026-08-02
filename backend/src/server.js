const http = require('http');
const { Server } = require('socket.io');
const createApp = require('./app');
const initSocket = require('./socket/socketHandler');

const PORT = process.env.PORT || 5000;

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});

const app = createApp(io);
server.on('request', app);

initSocket(io);

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` Alagappa University NME Portal API Backend Running    `);
  console.log(` Environment: Production Ready                         `);
  console.log(` Server URL : http://localhost:${PORT}                   `);
  console.log(` Socket.io  : ws://localhost:${PORT}                     `);
  console.log(`=======================================================`);
});
