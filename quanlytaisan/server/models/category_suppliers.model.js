const db = require("../database/connection");
class Category_Suppliers {
  constructor(categories_suppliers) {
    this.id = categories_suppliers.id;
    this.name = categories_suppliers.name;
    this.isDeleted = categories_suppliers.isDeleted;
  }
  static findAll() {
    let sql = "SELECT * FROM categories_suppliers";

    return db.execute(sql);
  }
  static fingById() {}
  save() {}
}
module.exports = Category_Suppliers;
