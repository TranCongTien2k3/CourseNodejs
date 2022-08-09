const suppliers = require("../models/suppliers.model");
exports.getList = async (req, res, next) => {
  try {
    const [rows, _] = await suppliers.findAll();
    return res.render("pages/suppliers/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.add = (req, res) => {};
exports.edit = (req, res) => {};
