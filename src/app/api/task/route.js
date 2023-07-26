import { Task} from "@/model/task";
import { NextResponse } from "next/server";


//get all task
export const GET= async(request)=>{
  
    try {
        const tasks=await Task.find();
        return NextResponse.json({tasks,message:"Tasks fetched successfully",status:200,success:true});
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Tasks fetched failed",status:400,success:false});
        
    }
}
  




//create task
export const POST= async(request)=>{

    const {title,content,completedDate, status,userId}=await request.json();

    if(!title || !content || !completedDate || !status || !userId)
    {
        return NextResponse.json({message:"All fields are required",status:400,success:false});
    }

    try {
        const task=await Task.create({title,content,completedDate,status,userId});
        return NextResponse.json({task,message:"Task created successfully",status:200,success:true});
       
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({message:"Task created failed",status:400,success:false});
        
    }


}