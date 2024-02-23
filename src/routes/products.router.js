const express = require("express");
//invocamos el método router de express
const router = express.Router();
//traemos las rutas

//array de productos

const products = [];

//rutas productos
router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
    const newProduct = req.body;
    users.push(newProduct);
    res.send({ status: "success", message: "Producto creado correctamente!" });
  });


//exportamos el router
module.exports = router;