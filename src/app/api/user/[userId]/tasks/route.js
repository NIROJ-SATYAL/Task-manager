import { Task } from "@/model/task";

// /api/user/[userId]/tasks/route.js


export const GET= async(request,{params})=>{

    const {userId}=params;

    try {
        let task=[]
        task=await Task.findById(userId);
        return NextResponse.json({task,message:"Task fetched successfully",status:200,success:true});
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({message:"Task fetched failed",status:400,success:false});
        
    }   
}
