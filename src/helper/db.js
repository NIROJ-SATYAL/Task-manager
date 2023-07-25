import mongoose from "mongoose";


export  const db = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
         
            dbName: "work-manager",
            });
            console.log("MongoDB Connected");

    } catch (error) {
        console.log("MongoDB Connection Failed");
        
    }
  
}

