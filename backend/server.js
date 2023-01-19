const http = require("http");
const app = require("./app/app");

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server started on port : http://localhost:${port}`);
});
