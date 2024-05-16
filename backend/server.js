const http = require("http");
const app = require("./app");
const PORT = 8080 || process.env.PORT;

const server = http.createServer(app);

server.listen(PORT,()=>{console.log("The server is listening at PORT 8080..")})