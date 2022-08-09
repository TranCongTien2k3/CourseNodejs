var express = require("express");
var router = express.Router();
var DB = require("../server/model/model");

// create and save new user
/* GET category listing. */
router.post("/categories", function (req, res, next) {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
  }
  // new user
  const user = new DB.categories({
    id: req.body.id,
    name: req.body.name,
  });
  //save
  user
    .save(user)
    .then((data) => {
      res.send(data);
      // res.redirect("/items/categories/add");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating and create ",
      });
    });
});
router.get("/categories", function (req, res, next) {
  if (req.query.id) {
    const id = req.query.id;
    DB.categories
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    DB.categories
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error  Occurred while retriving user information",
        });
      });
  }
});
router.put("/categories/:id", function (req, res, next) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  DB.categories
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot Update user with ${id}. Maybe user not found",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
});
router.delete("/categories/:id", function (req, res, next) {
  const id = req.params.id;
  DB.categories
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot Delete user with ${id}. Maybe user not found",
        });
      } else {
        res.send({
          message: "User was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id =" + id,
      });
    });
});
/* GET products listing. */
router.post("/products", function (req, res, next) {
  if (!req.body) {
    res.status(400).send({ message: "Cantent can not be emtpy!" });
  }
  // new user
  const user = new DB.products({
    name: req.body.name,
    quantity: req.body.quantity,
    unit_price: req.body.unit_price,
    category_name: req.body.category_name,
    image: req.body.image,
    discount: req.body.discount,
    status: req.body.status,
    description: req.body.description,
  });
  //save
  user
    .save(user)
    .then((data) => {
      res.send(data);
      // res.redirect("/item/products/add");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating and create ",
      });
    });
});
router.get("/products", function (req, res, next) {
  if (req.query.id) {
    const id = req.query.id;
    DB.products
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving user with id " + id });
      });
  } else {
    DB.products
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error  Occurred while retriving user information",
        });
      });
  }
});
router.put("/products/:id", function (req, res, next) {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  DB.products
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot Update user with ${id}. Maybe user not found",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
});
router.delete("/products/:id", function (req, res, next) {
  const id = req.params.id;
  DB.products
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot Delete user with ${id}. Maybe user not found",
        });
      } else {
        res.send({
          message: "User was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id =" + id,
      });
    });
});
/// category

module.exports = router;
