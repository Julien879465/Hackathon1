const AbstractManager = require("./AbstractManager");

class ReviewManager extends AbstractManager {
  constructor() {
    super({ table: "review" });
  }
}

/*insert(review) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [review.title]
    );
  }

  update(review) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [review.title, review.id]
    );
  }
}*/

module.exports = ReviewManager;
