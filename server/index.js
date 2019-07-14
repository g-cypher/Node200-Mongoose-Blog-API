const server = require("./app");
require('dotenv').config();
const PORT = process.env.PORT;

server.listen(8080, function() {
    console.log(`server is listening on http://localhost:${PORT}`)
});