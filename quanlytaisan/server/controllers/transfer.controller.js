const transfer = require("../models/transfer_histories.model");
exports.getList = async (req, res, next) => {
  try {
    const [rows, _] = await transfer.findAll();
    return res.render("pages/transfer/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.add = (req, res) => {};
exports.edit = (req, res) => {};
exports.department = (req, res) => {};
exports.action = (req, res) => {};
exports.staff = (req, res) => {};
exports.department_his = (req, res) => {};
exports.staff_add = (req, res) => {};
exports.staff_his = (req, res) => {};
exports.department_add = (req, res) => {};
