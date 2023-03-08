const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const restaurantControllers = require("./controllers/restaurantControllers");
const reviewControllers = require("./controllers/reviewControllers");
const menuControllers = require("./controllers/menuControllers");

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

router.get("/menus", menuControllers.browse);
router.get("/menus/:id", menuControllers.read);
router.put("/menus/:id", menuControllers.edit);
router.post("/menus", menuControllers.add);
router.delete("/menus/:id", menuControllers.destroy);

module.exports = router;
