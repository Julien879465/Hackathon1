const AbstractManager = require("./AbstractManager");

class Menu_itemManager extends AbstractManager {
  constructor() {
    super({ table: "menu_item" });
  }
}

module.exports = Menu_itemManager;
