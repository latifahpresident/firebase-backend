const express = require('express');
const server = express();
const cors = require('cors');
const usersRoutes = require('./routes/userRoutes');
const authenticate = require('./auth/auth');

server.use(express.json());
server.use(cors());

server.use('/users', authenticate, usersRoutes)

server.listen(8081, () => console.log(`server listening on port 8081`));