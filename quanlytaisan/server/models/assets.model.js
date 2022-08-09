const db = require("../database/connection");

class Assets {
  constructor(assets) {
    this.id = assets.id;
    this.amount = assets.amount;
    this.asset_category_id = assets.asset_category_id;
    this.condition_asset = assets.condition_asset;
    this.create_date = assets.create_date;
    this.delete_by_id = assets.delete_by_id;
    this.department_id = assets.department_id;
    this.description = assets.description;
    this.group_assets_id = assets.group_assets_id;
    this.is_deleted = assets.is_deleted;
    this.modified_date = assets.modified_date;
    this.name = assets.name;
    this.position = assets.position;
    this.price = assets.price;
    this.sell_price = assets.sell_price;
    this.staff_id = assets.staff_id;
    this.status = assets.status;
    this.supplier_id = assets.supplier_id;
    this.updated_by_id = assets.updated_by_id;
    this.code_asset = assets.code_asset;
    this.path_image = assets.path_image;
  }
  static findAll() {
    let sql = "SELECT * FROM assets;";

    return db.execute(sql);
  }
  getById(id, result) {
    return db.execute("select * from assets where id=?", id);
  }
  create(newData, result) {
    return db.execute("insert into assets set ?", newData);
  }
}
module.exports = Assets;
