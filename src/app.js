const express = require("express");
const app = express();
const PUERTO = 8080;
const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");

//recibir datos en formato json
app.use(express.json());

//rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter)
//listen

app.listen(PUERTO, () => {
  console.log(`conectado en http://localhost:${PUERTO}`);
});
