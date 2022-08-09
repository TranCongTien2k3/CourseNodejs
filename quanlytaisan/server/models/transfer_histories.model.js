const db = require("../database/connection");
class Transfer {
  constructor(transfer_histories) {
    this.id = transfer_histories.id;
    this.asset_id = transfer_histories.asset_id;
    this.department_id_new = transfer_histories.department_id_new;
    this.department_id_old = transfer_histories.department_id_old;
    this.end_date = transfer_histories.end_date;
    this.is_deleted = transfer_histories.is_deleted;
    this.reason = transfer_histories.reason;
    this.staff_id_new = transfer_histories.staff_id_new;
    this.staff_id_old = transfer_histories.staff_id_old;
    this.start_date = transfer_histories.start_date;
    this.status = transfer_histories.status;
  }
  static findAll() {
    let sql = "SELECT * FROM transfer_histories";

    return db.execute(sql);
  }
  save() {}
}
module.exports = Transfer;
