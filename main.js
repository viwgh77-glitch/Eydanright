const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: process.env.PORT || 8080 });
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach(c => {
      if (c.readyState === 1) c.send(data.toString());
    });
  });
});
