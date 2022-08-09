var Assets = require("../models/assets.model");

exports.detail = (req, res) => {
  Assets.getById(req.params.id, (response) => {
    res.send({ result: response });
  });
};
exports.getList = async (req, res, next) => {
  try {
    var data = req.body;
    console.log(data[0]);

    const [rows, _] = await Assets.findAll();
    // console.log(rows);
    return res.render("pages/assets/index", {
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

exports.add_assets = async (req, res, next) => {
  try {
    let data = req.body;

    console.log(data);
    // res.status(201).json({ message: "Post created" });
    return res.render("pages/assets/create");
  } catch (error) {
    next(error);
  }
};

exports.edit_assets = (req, res) => {};
exports.qrcode = (req, res) => {};
exports.repair_find = (req, res) => {};
exports.repair_history = (req, res) => {};
exports.revoke = (req, res) => {};
exports.revoke_history = (req, res) => {};
exports.sell = (req, res) => {};
exports.sell_history = (req, res) => {};
exports.action = (req, res) => {};
exports.used_history = (req, res) => {};
