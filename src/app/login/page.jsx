"use client"
import React from 'react'
import { Form,Formik,ErrorMessage,onSubmit ,Field } from 'formik'

export const metadata = {
   title:"login page",
    description:"login page",
}

const page = () => {
  const [show,setShow]=React.useState(false)
  return (
    <div className='w-full h-full flex justify-center  items-center '>
      <section className='   p-5 bg-slate-300 rounded-2xl w-full md:w-[40%]'>
      <h1 className='text-bold font-bold text-center '>login page</h1>

      <form >

      <input type="email" placeholder="email" className="w-full p-2 my-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent" />
      <div className='relative'>

      <input type={show?"text":"password"} placeholder="password" className="w-full p-2 my-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent" />
      <span className='absolute top-4 right-4 cursor-pointer' onClick={()=>setShow(!show)}>{show?"hide":"show"}</span>
      </div>
      <div className='flex justify-between items-center'>
      <button className='bg-transparent px-5 text-center  rounded-2xl  hover:bg-slate-500 ease-in-out 0.5s ' >
        login
      </button>

      <button className='bg-transparent px-5 text-center  rounded-2xl  hover:bg-slate-500 ease-in-out 0.5s ' >
        <span>forgot password?</span>
      </button>
      </div>
      </form>


    </section>
    </div>
    
  )
}

export default page