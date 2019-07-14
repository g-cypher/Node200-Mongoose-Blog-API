const server = require("./app");
require('dotenv').config();
const PORT = process.env.PORT;

server.listen(PORT, function() {
    console.log(`server is listening on http://localhost:${PORT}`)
});