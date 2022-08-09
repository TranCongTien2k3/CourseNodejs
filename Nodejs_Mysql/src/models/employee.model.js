const connect = require("../database/connection");
class Employee {
  constructor(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
  }
  static getAllEmployee() {
    let sql = "select * from employee";
    return connect.query(sql);
  }
  static getById(id, result) {
    console.log(id);
    return connect.query(
      `select *from employee where id = ${id}`,
      (err, res) => {
        if (err) {
          console.error(err);
        } else {
          result(null, res);
        }
      }
    );
  }
}
module.exports = { Employee };
