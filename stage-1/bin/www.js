const http = require("http")

const PORT = 8088
const serverHandle = require("../index")

const server = http.createServer(serverHandle)
server.listen(PORT)
