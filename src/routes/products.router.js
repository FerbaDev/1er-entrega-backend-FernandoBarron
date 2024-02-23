const express = require("express");
//invocamos el método router de express
const productsRouter = express.Router();
//traemos las rutas

//array de productos

const products = [];

//rutas productos
productsRouter.get("/", (req, res) => {
  res.json(products);
});

productsRouter.post("/", (req, res) => {
  const newProduct = req.body;
  users.push(newProduct);
  res.send({ status: "success", message: "Producto creado correctamente!" });
});

//exportamos el router
module.exports = productsRouter;
