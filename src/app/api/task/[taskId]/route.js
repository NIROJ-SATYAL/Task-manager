import { Task } from "@/model/task";

//api/task/[taskId]
//get single task by id
export const GET= async( request,{params})=>{
    const {taskId}=params;
    try {
        const task=await Task.findById(taskId);
        return NextResponse.json({task,message:"Task fetched successfully",status:200,success:true});
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Task fetched failed",status:400,success:false});
        
    }


}


export const POST=async(request,{params})=>{
    
}


//DELETE TASK
export const DELETE=async(request,{params})=>{
    const {taskId}=params;
    try {
        const task=await Task.findByIdAndDelete(taskId);
        if(!task)
        {
            return NextResponse.json({message:"Task not found",status:400,success:false});
        }
        return NextResponse.json({message:"Task deleted successfully",status:200,success:true});
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({message:"Task deleted failed",status:400,success:false});
        
    }
    
}


//update the task by id
export const PUT=async(request,{params})=>{
    const {taskId}=params;
    const {title,content,completedDate, status}=await request.json();

    if(!title || !content || !completedDate || !status )
    {
        return NextResponse.json({message:"All fields are required",status:400,success:false});
    }
    try
    {
        const updatedTask=await Task.findByIdAndUpdate(taskId,{title,content,completedDate,status});
        if(!updatedTask)
        {
            return NextResponse.json({message:"Task not found",status:400,success:false});
        }
        return NextResponse.json({message:"Task updated successfully",status:200,success:true});

    }
    catch (error) {
        console.log(error);
        return NextResponse.json({message:"Task updated failed",status:400,success:false});
        
    }

    
}