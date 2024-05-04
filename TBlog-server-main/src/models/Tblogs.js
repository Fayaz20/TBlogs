import mongoose from "mongoose";

const tblogSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    location : {
        type:String,
        required:true,
    },
    description : {
        type:String,
        required:true,
    },
    imageUrl: {
        type:String,
        required:true,
    },
    userOwner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "users",
        require:true,
    }
})
export const TblogModel = mongoose.model("tblog", tblogSchema);