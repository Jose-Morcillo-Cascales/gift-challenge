const {Schema, model} = require("mongoose")
//TODO validate si da tiempo

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "the username is required"],
        max: 20,
        min: 4,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "the email is required"],
        unique: [true, "the email must be unique"],
        trim: true,
    },
    img: {
        id: String,
        url: {
            type: String,
            required: [true, "img is required"],
             default: "https://res.cloudinary.com/drghk9p6q/image/upload/v1674474842/Final-Project-MERN/images-orpheus/default-images/Untitled_design_tvsbzn.webp"
        }
    },
    gifts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'gift'
        }
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    isAdmin: {
        type: Boolean,
        default: false
    }
},{ timestamps: true })

module.exports = model('user',userSchema)