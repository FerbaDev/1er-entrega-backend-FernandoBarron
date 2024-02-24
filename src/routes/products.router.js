const express = require("express");

//invocamos el método router de express
const productsRouter = express.Router();
//traemos el product manager
const ProductManager = require("../controllers/productManager");
const productManager = new ProductManager("./src/models/productos.json");

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

//get product por id
productsRouter.get("/:pid", async (req, res) => {
  try {
    let id = req.params.pid;
    let product = await productManager.getProductById(id);
    if (!product) {
      return res.json({ error: "id no encontrado" });
    }
    return res.json(product);
  } catch (error) {
    res.status(500).json({
      error: `Error interno del servidor, no se encuentra el id ${id}`,
    });
  }
});

//post
productsRouter.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const response = await productManager.addProduct(newProduct);
    res.json(response);
    res.send({ status: "success", message: "Producto creado correctamente!" });
  } catch (error) {
    res.send("Error al agregar producto");
  }
});

//exportamos el router
module.exports = productsRouter;
