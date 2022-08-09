const departments = require("../models/departments.model");
exports.getList = async (req, res, next) => {
  try {
    const [rows, _] = await departments.findAll();
    return res.render("pages/departments/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.add = (req, res) => {};
exports.edit = (req, res) => {};
