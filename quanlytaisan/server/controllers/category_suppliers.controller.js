const Category_Suppliers = require("../models/category_suppliers.model");
const connection = require("../database/connection");

exports.getList = async (req, res, next) => {
  try {
    const [rows, _] = await Category_Suppliers.findAll();
    console.log(_);
    return res.render("pages/category-suppliers/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.add = (req, res) => {
  let { id, name } = req.body;
  connection.execute("insert into category_assets(id,name) values(?,?)", [
    id,
    name,
  ]);
  return res.direct("pages/category-assets/index");
};
exports.edit = (req, res) => {
  let { id, name } = req.body;
  pool.execute("update category_assets set name = ? where id = ?", [name, id]);
  return res.render("pages/category-assets/edit");
};
exports.delete = (req, res) => {
  let id = req.body.id;
  pool.execute("delete from category_assets where id = ?", [id]);
};
