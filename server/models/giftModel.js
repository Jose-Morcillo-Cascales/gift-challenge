const {Schema, model} = require("mongoose")


const giftSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
        max: 20,
        min: 4,
        trim: true,
    },
    file: {
        id: String,
        url: {
            type: String,
            required: [true, "img is required"],
            // default: "https://res.cloudinary.com/drghk9p6q/image/upload/v1674474842/Final-Project-MERN/images-orpheus/default-images/Untitled_design_tvsbzn.webp"
        }
    },
    moods: [
        { 
        type:String,
        }
    ],
    ownership: {
        type: Schema.Types.ObjectId,
         required: [true, "the ownership is required"],
        ref: 'user'
    }

},{ timestamps: true })

module.exports = model('gift',giftSchema)