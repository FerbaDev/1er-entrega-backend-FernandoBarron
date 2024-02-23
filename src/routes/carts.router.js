const express = require("express");
//invocamos el método router de express
const router = express.Router();
//traemos las rutas

//array de carts

const carts = [];

//rutas usuarios
router.get("/", (req, res) => {
  res.json(carts);
});

//exportamos el router
module.exports = router;
