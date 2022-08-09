const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const users = [
  {
    name: "Tien",
    lastName: "tran cong",
    age: "18",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  //   console.log(users);
  const user = req.body;
  const userId = uuidv4();

  users.push({ ...user, id: uuidv4() });
  res.send(users);
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => {
    user.id === id;
  });
  res.send(foundUser);
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter;
  (user) => {
    user.id != id;
  };
});
module.exports = router;
