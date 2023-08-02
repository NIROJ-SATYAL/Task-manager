import mongoose from "mongoose";


export  const db = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
         
            dbName: "work-manager",
            connectTimeoutMS: 30000,
            });
            console.log("MongoDB Connected");

    } catch (error) {
        console.log("MongoDB Connection Failed");
        
    }
  
}

