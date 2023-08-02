import httpaxios from '@/helper/httpaxios'




const task_service = async(task) => {
 const res=await httpaxios.post('/task',task)
    return res.data
}

export default task_service