
import { User } from "@/model/user";
import { NextResponse } from "next/server";




//delete the user by id
export const DELETE= async(request,{params})=>{
    const {id}=params;
    console.log(id)
   
    try {
        let user=await User.findByIdAndDelete(id);
        console.log(user)
        if(user)
        {
            return NextResponse.json({user,message:"User deleted successfully",status:200,success:true});
        }
        else{
            return NextResponse.json({message:"User not found",status:400,success:false});
        }
       
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"User deleted failed",status:400,success:false});
        
    }
}


//update the user by id
export const PUT= async(request,{userId})=>{
    console.log(userId)
    const {name,email,password,Address}= await request.json();
    try {
       const user= await User.findByIdAndUpdate(userId,{name,email,password,Address});
       if(!user)
         {

            return NextResponse.json({message:"User not found",status:400,success:false});
            }

        return NextResponse.json({user,message:"User updated successfully",status:200,success:true});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"User updated failed",status:400,success:false});
        
        
    }
}
//get user by id
export const GET= async(request,{userId})=>{
    console.log(userId)
    try {
        const user=await User.findById(userId).select("-password");
        if(!user)
        {
            return NextResponse.json({message:"User not found",status:400,success:false});
        }
        return NextResponse.json({user,message:"User fetched successfully",status:200,success:true});
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"User fetched failed",status:400,success:false});
        
    }
}