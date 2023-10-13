import mongoose from "mongoose"
export const connectMongoDB1 = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI1)
        console.log("Connected to MongoDB credentials")
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error)
    }
}