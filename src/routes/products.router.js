const express = require("express");
//invocamos el método router de express
const productsRouter = express.Router();
const productManager = require("../app.js");

//array de productos

const products = [];

//rutas productos
//get products
productsRouter.get("/", async (req, res) => {
  try {
    let limit = req.query.limit;
    let products = await productManager.getProducts();
    if (limit) {
      res.json(products.slice(0, limit));
    } else {
      res.json(products);
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

productsRouter.post("/", (req, res) => {
  const newProduct = req.body;
  users.push(newProduct);
  res.send({ status: "success", message: "Producto creado correctamente!" });
});

//exportamos el router
module.exports = productsRouter;
