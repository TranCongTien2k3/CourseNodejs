const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
var schema2 = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
var schema1 = new mongoose.Schema({
  name: String,
  quantity: String,
  unit_price: String,
  category_name: String,
  image: String,
  discount: String,
  status: String,
  description: String,
});
var schema3 = new mongoose.Schema({
  id: String,
  cpu: String,
  don_gia: Number,
  don_vi_ban: Number,
  don_vi_kho: Number,
  dung_luong_pin: String,
  he_dieu_hanh: String,
  man_hinh: String,
  ram: String,
  ten_san_pham: String,
  thiet_ke: String,
  thong_tin_bao_hanh: String,
  thong_tin_chung: String,
  ma_danh_muc: String,
  ma_hang_sx: String,
});
const categories = mongoose.model("categories", schema);
const products = mongoose.model("products", schema1);
const vai_tro = mongoose.model("vai_tro", schema2);
const san_pham = mongoose.model("san_pham", schema3);
module.exports.categories = categories;
module.exports.products = products;
