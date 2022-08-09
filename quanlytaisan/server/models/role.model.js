const db = require("../database/connection");
class Role {
  constructor(role) {
    this.id = role.id;
    this.name = role.name;
  }
  static findAll() {
    let sql = "SELECT * FROM role";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Role;
