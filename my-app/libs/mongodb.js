import mongoose from "mongoose";

 const connectMongoDB = async ()=>{
    
    try {
       
         await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Successfull");
    } 
    catch (error) {
       
        console.log("Unable to connect ")
        console.log(error);
    }

};
export default connectMongoDB;
