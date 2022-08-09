const db = require("../database/connection");
class Suppliers {
  constructor(suppliers) {
    this.id = suppliers.id;
    this.address = suppliers.address;
    this.is_deleted = suppliers.is_deleted;
    this.name = suppliers.name;
    this.phone_number = suppliers.phone_number;
    this.suppliers_category_id = suppliers.suppliers_category_id;
  }
  static findAll() {
    let sql = "SELECT * FROM suppliers";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Suppliers;
