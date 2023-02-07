const {Schema, model} = require("mongoose")


const moodSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
        max: 20,
        min: 4,
        trim: true,
    },
    gifts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'gifts'
        }
    ]
},{ timestamps: true })

module.exports = model('mood',moodSchema)