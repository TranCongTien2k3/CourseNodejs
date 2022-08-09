const db = require("../database/connection");
class Sell_assets {
  constructor(sell_asset) {
    this.id = sell_asset.id;
    this.asset_id = sell_asset.asset_id;
    this.created_date = sell_asset.created_date;
    this.is_deleted = sell_asset.is_deleted;
    this.name = sell_asset.name;
    this.note = sell_asset.note;
    this.phone_number = sell_asset.phone_number;
    this.price_sell = sell_asset.price_sell;
  }
  static findAll() {
    let sql = "SELECT * FROM sell_asset";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Sell_assets;
