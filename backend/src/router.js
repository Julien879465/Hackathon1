const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const restaurantControllers = require("./controllers/restaurantcontrollers");
const reviewControllers = require("./controllers/reviewControllers");
const menu_itemControllers = require("./controllers/menu_itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/restaurants", restaurantControllers.browse);
router.get("/restaurants/:id", restaurantControllers.read);
router.put("/restaurants/:id", restaurantControllers.edit);
router.post("/restaurants", restaurantControllers.add);
router.delete("/restaurants/:id", restaurantControllers.destroy);

router.get("/reviews", reviewControllers.browse);
router.get("/reviews/:id", reviewControllers.read);
router.put("/reviews/:id", reviewControllers.edit);
router.post("/reviews", reviewControllers.add);
router.delete("/reviews/:id", reviewControllers.destroy);

router.get("/menu_items", menu_itemControllers.browse);
router.get("/menu_item/:id", menu_itemControllers.read);
router.put("/menu_item/:id", menu_itemControllers.edit);
router.post("/menu_item", menu_itemControllers.add);
router.delete("/menu_item/:id", menu_itemControllers.destroy);

module.exports = router;
