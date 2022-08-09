const db = require("../database/connection");
class Category_assets {
  constructor(category_assets) {
    this.id = category_assets.id;
    this.name = category_assets.name;
    this.isDeleted = category_assets.isDeleted;
  }
  save() {}
  static findAll() {
    let sql = "SELECT * FROM category_assets;";

    return db.execute(sql);
  }
  static findById(id) {
    let sql = `SELECT * FROM category_assets WHERE id = ${id};`;

    return db.execute(sql);
  }
}
module.exports = Category_assets;
