import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URI) return console.log("MONGO DB URI is not ocnfigured.");
    if(isConnected) return console.log("Using existing database connection");
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true
        console.log("MONGODB Conntected")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
}