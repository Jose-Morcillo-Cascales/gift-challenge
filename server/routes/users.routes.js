const express = require("express")

const {
    postUser,
    getAllUsers,
    getOneUserById
} =require("./../controllers/users.controller")

  const { checkJwt } = require("../middlewares/checkJwt.middleware")

const router = express.Router()
router
    .get("/", getAllUsers)
    .get("/:id", getOneUserById)
    .post("/", postUser)


module.exports = router;



