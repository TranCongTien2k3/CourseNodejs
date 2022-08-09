const staff = require("../models/staffs.model");
exports.getList = async (req, res, next) => {
  try {
    const [rows, _] = await staff.findAll();
    return res.render("pages/staffs/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.add = (req, res) => {};

exports.detail = (req, res) => {};
exports.edit = (req, res) => {};
exports.search = (req, res) => {};
