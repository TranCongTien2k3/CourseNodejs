const db = require("../database/connection");
class Group_asset {
  constructor(group_assets) {
    this.id = group_assets.id;
    this.group_name = group_assets.group_name;
    this.is_deleted = group_assets.is_deleted;
  }
  static findAll() {
    let sql = "SELECT * FROM group_assets";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Group_asset;
