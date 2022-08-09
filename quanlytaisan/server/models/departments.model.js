const db = require("../database/connection");
class Department {
  constructor(department) {
    this.id = department.id;
    this.department_name = department.department_name;
    this.is_deleted = department.is_deleted;
    this.parent_id = department.parent_id;
  }
  static findAll() {
    let sql = "SELECT * FROM departments";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Department;
