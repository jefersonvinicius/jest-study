import express from 'express';

const server = express();

server.get('/', (_, response) => {
    return response.json({ message: 'serve working' });
});

server.listen(3000, () => {
    console.log('serving in http://localhost:3000');
});

export default server;
