const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes/charactersRouter"));

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        error:true,
        message: err.message
    })
}) 

module.exports = server;
