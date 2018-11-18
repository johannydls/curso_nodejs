const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/", (req, res) => {
    return res.send({
        msg: "Hello Rocketseat",
        project: "API NodeJS",
        version: "1.0.0"
    });
});

routes.get("/products", ProductController.index);


module.exports = routes;