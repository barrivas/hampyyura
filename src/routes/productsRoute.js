//Require

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/product-images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploader = multer({
  storage,
});

const productsControllers = require("../controllers/productsControllers");

/*** GET ALL PRODUCTS ***/
router.get("/", productsControllers.products);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsControllers.productCreate);
router.post("/", uploader.single("product-image"), productsControllers.store);

/*** GET ONE PRODUCT ***/
router.get("/:id", productsControllers.productDetail);

/*** BUY PRODUCT ***/
router.get("/productCart", productsControllers.productCart);

/*** EDIT ONE PRODUCT***/
router.get("/:id/edit", productsControllers.edit);
router.put("/:id", uploader.single("image"), productsControllers.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsControllers.destroy);

module.exports = router;
