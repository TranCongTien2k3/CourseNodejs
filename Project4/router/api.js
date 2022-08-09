const express = require("express");
const APIController = require("../controllers/APIController");
const router = express.Router();

router.get("/users", APIController.getAllUsers); // method GET -> READ data
router.post("/create-user", APIController.createNewUser); // method POST -> CREATE data
router.put("/update-user", APIController.updateUser); //method PUT -> UPDATE data
router.delete("/delete-user/:id", APIController.deleteUser); //method DELETE -> DELETE data

module.exports = router;
