const mongoose = require("mongoose")
const {  Gift ,User } = require("./../models")
const fs = require('fs-extra')
const {
    uploadImage, destroyImage
} = require("../utils/cloudinary")

const giftsController = {
    getAllGifts: async (req,res) =>{
        try {
            const gifts = await Gift.find({})
                .populate("ownership") 
                .lean() 

            if (gifts.length < 1) {
                return res.status(404).send({
                    status: "FALSE",
                    message: `The DB is currently empty`
                })
            }
            res.status(200).send({
                status:"OK",
                gifts
            })

        }catch(err){
            console.log(err.message)
            res.status(400).send(err.message)
        }
    },
    getOneGiftById: async (req,res) =>{
        const {params:{id}} = req

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({
                status: "FALSE",
                message: `${id} is an invalid ID`
            })
        }

        try {
            const gift = await Gift.findById(id)
                .populate("ownership") 
                .lean() 

                if (!gift) {
                    return res.status(404).send({
                        status: "FALSE",
                        message: `User ${id} was not found`
                    })
                }

                res.status(200).send({
                    status:"OK",
                    gift
                })
                

        } catch (err){
            console.log(err.message)
            res.status(400).send(err.message)

        }
    },
    postGift : async (req,res) =>{
        const {body , files} = req
       
       try {

            if (!mongoose.Types.ObjectId.isValid(body.ownership)) {

                return res.status(404).send({
                    status: "FALSE",
                    message: `${body.ownership} is an invalid ID`
                })
            }

            if(files?.image){
                
                if(body.moods.indexOf(",") !== -1){

                    const moods = body.mood?.split()

                    const { public_id, secure_url } = await uploadImage(files.image.tempFilePath)
                    await fs.unlink(files.image.tempFilePath)
                  
                    
                    const gift = await Gift.create(
                        {
                            ...body,
                            moods,
                            file: { id : public_id , url : secure_url}
                        }
                    )

                    const updatedUser = await User.findByIdAndUpdate(
                        { _id: body.ownership },
                        {
                            "$push": { gifts: gift.id }
                        },
                        { new: true }
                        
                    )

                    res.status(201).send({
                        status: "Created",
                        gift,
                        updatedUser
                    })

                    

                    
                    
                }else {
                    

                    const { public_id, secure_url } = await uploadImage(files.image.tempFilePath)
                    await fs.unlink(files.image.tempFilePath)
                    const gift = await Gift.create(
                        {
                            ...body,
                            file: { id : public_id , url : secure_url}
                        }
                    )

                    const updatedUser = await User.findByIdAndUpdate(
                        { _id: body.ownership },
                        {
                            "$push": { gifts: gift.id }
                        },
                        { new: true }
                        
                    )

                    res.status(201).send({
                        status: "Created",
                        gift,
                        updatedUser
                    })
                }
            }else {
              
                if(body.mood.indexOf(",") !== -1){

                    const moods = body.mood?.split()

                    const gift = await Gift.create(
                        {
                            ...body,
                            moods,
                        }
                    )

                    const updatedUser = await User.findByIdAndUpdate(
                        { _id: body.ownership },
                        {
                            "$push": { gifts: gift.id }
                        },
                        { new: true }
                        
                    )

                    res.status(201).send({
                        status: "Created",
                        gift,
                        updatedUser
                    })

                    

                    
                }else {
                    
                    const gift = await Gift.create(
                        {
                            ...body,
                        }
                    )

                    const updatedUser = await User.findByIdAndUpdate(
                        { _id: body.ownership },
                        {
                            "$push": { gifts: gift.id }
                        },
                        { new: true }
                        
                    )

                    res.status(201).send({
                        status: "Created",
                        gift,
                        updatedUser
                    })
                }
            }


       } catch (err) {
        res.status(400).send(err.message)
        console.log(err.message)
       } 
    }
}

module.exports = {
    postGift:giftsController.postGift,
    getAllGifts:giftsController.getAllGifts,
    getOneGiftById:giftsController.getOneGiftById
}