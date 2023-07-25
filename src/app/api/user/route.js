import { User } from "@/model/user";  
import { NextResponse } from "next/server";
import { db } from "@/helper/db";

db()




  //get all user
  export const GET= async(request)=>{

    let users=[]
    try {
        let users=await User.find({}).select("-password");
        return NextResponse.json({users,message:"Users fetched successfully",status:200,success:true});
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Users fetched failed",status:400,success:false});
        
    }
  }
  //create user

    export const POST= async(request)=>{
    
        const {name,email,password,Address}= await request.json();
        console.log(name,email,password,Address)

        try {
            const user=await User.create({name,email,password,Address});
            return NextResponse.json({user,message:"User created successfully",status:200,success:true});
           
        }
        catch (error) {
            console.log(error);
            return NextResponse.json({message:"User created failed",status:400,success:false});
            
        }
    }