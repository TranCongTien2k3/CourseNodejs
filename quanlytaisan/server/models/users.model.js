const db = require("../database/connection");
class Users {
  constructor(users) {
    this.id = users.id;
    this.pass_word = users.pass_word;
    this.re_password = users.re_password;
    this.user_name = users.user_name;
  }
  static findAll() {
    let sql = "SELECT * FROM users";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Users;
