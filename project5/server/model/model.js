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
const categories = mongoose.model("categories", schema);
const products = mongoose.model("products", schema1);
module.exports.categories = categories;
module.exports.products = products;
