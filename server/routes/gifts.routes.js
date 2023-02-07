const express = require("express")

const {
    postGift,
    getAllGifts,
    getOneGiftById

} = require("./../controllers/gift.controller")
const router = express.Router()
    router
        .get("/",getAllGifts)
        .get("/:id",)
        .post("/",postGift)

module.exports = router;