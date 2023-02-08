const mongoose = require("mongoose")
const { User } = require("./../models")

//TODO pagina perfil y mirar los exec
const userController = {
    getAllUsers: async (req,res) =>{
        try {
            const users = await User.find({})
                .populate("gifts") 
                .populate("followers")
                .lean() 

            if (users.length < 1) {
                return res.status(404).send({
                    status: "FALSE",
                    message: `The DB is currently empty`
                })
            }
            res.status(200).send({
                status:"OK",
                users
            })

        }catch{
            console.log(err.message)
            res.status(400).send(err.message)
        }
    },
    getOneUserById: async (req,res) =>{
        const {params:{id}} = req

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({
                status: "FALSE",
                message: `${id} is an invalid ID`
            })
        }

        try {
            const user = await User.findById(id)
                .populate("gifts") 
                .populate("followers")
                .lean() 

                if (!user) {
                    return res.status(404).send({
                        status: "FALSE",
                        message: `User ${id} was not found`
                    })
                }

                res.status(200).send({
                    status:"OK",
                    user
                })
                

        } catch {

        }
    },
    postUser : async (req,res) =>{
        const {body} = req

       try {
        const userExist = await User.findOne({email:body.email})
        if (userExist){
            res.status(400).send({
                status:"Find",
                user:userExist
            })
        }
        const user = await User.create({...body})
        res.status(201).send({
            status: "Created",
            user
        })

       } catch (err) {
        res.status(400).send(err.message)
       } 
    }
}

module.exports = {
    postUser : userController.postUser,
    getAllUsers :userController.getAllUsers,
    getOneUserById :userController.getOneUserById
    
}