const db = require("../database/connection");
class Staffs {
  constructor(staffs) {
    this.id = staffs.id;
    this.address = staffs.address;
    this.department_id = staffs.department_id;
    this.is_deleted = staffs.is_deleted;
    this.name = staffs.name;
    this.phone_number = staffs.phone_number;
    this.images_id = staffs.images_id;
    this.path_image = staffs.path_image;
  }
  static findAll() {
    let sql = "SELECT * FROM staffs";
    let ans = db.execute(sql);
    db.destroy();
    db.query("SELECT *from staffs", function (err, result, fields) {
      console.log(result);
    });
    return ans;
  }
  save() {}
}

module.exports = Staffs;
