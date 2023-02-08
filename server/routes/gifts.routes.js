const express = require("express")

const {
    postGift,
    getAllGifts,
    getOneGiftById

} = require("./../controllers/gift.controller")

const { checkJwt } = require("../../middlewares/checkJwt.middleware")

const router = express.Router()
    router
        .get("/",getAllGifts)
        .get("/:id",getOneGiftById)
        .post("/",postGift)

module.exports = router;