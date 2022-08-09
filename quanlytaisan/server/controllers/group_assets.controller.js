var group_assets = require("../models/group_assets");
exports.getList = async (req, res, next) => {
  try {
    const [rows, _] = await group_assets.findAll();
    return res.render("pages/group-assets/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
exports.add = async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    return res.render("pages/group-assets/create");
  } catch (err) {
    next(err);
  }
};
exports.edit = (req, res) => {};
