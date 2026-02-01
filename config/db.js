import mongoose from "mongoose";

export const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("server working connected with mongo")
    } catch (error) {
        console.log("i think there is a error")
        
    }
}

export default db