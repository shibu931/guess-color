import mongoose from "mongoose";

const countdownTimer = new mongoose.Schema({
    id: {
        type:mongoose.ObjectId,
        require:true
    },
    time:{
        type:Date,
    }
})