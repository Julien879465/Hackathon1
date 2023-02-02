const AbstractManager = require("./AbstractManager");

class MenuManager extends AbstractManager {
  constructor() {
    super({ table: "menu" });
  }
}

module.exports = MenuManager;
