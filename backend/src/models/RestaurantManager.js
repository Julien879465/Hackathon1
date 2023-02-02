const AbstractManager = require("./AbstractManager");

class RestaurantManager extends AbstractManager {
  constructor() {
    super({ table: "restaurant" });
  }
}

module.exports = RestaurantManager;
