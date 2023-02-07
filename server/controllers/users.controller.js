const mongoose = require("mongoose")
const { User } = require("./../models")
const fs = require('fs-extra')
const {
    uploadImage, destroyImage
} = require("../utils/cloudinary")