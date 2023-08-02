"use client"
import React from 'react'
import { Form,Formik,ErrorMessage,Field } from 'formik'
import Link from 'next/link'
import * as yup from "yup";

export const metadata = {
   title:"login page",
    description:"login page",
}


const initialValues={
  email:'',
  password:''

}

const validationSchema=yup.object({
  email:yup.string().email('invalid email').required('email is required'),
  password:yup.string().required('password is required').min(6,'password must be 6 char long')
})

const page = () => {
  document.title=metadata.title
  const [show,setShow]=React.useState(false)
  return (
    <div className="w-full  block   p-4 flex items-center justify-center">
    <div className="bg-transparent py-6 px-10 sm:max-w-md w-full ">
      <div className="sm:text-3xl text-4xl  font-bold text-center text-white mb-12">
        Login  Form 
      </div>
<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values)=>console.log(values)}>
      <Form >
       
        <div >
          <Field type="email" name="email" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white my-8" placeholder="Eamil Adress " />
          <div className="text-red-600 mb-2 text-bold">
          <ErrorMessage name='email' />
          </div>
        </div>
       
       <div >
        <div className="relative">
          <Field type={show?"text":"password"} name="password" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Password " />
          <span className='absolute top-1 right-4 cursor-pointer' onClick={()=>setShow(!show)}>{show?"hide":"show"}</span>
          
  
        </div>
        <div className="text-red-600 mb-2 text-bold">
          <ErrorMessage name='password' />

        </div>
        </div>
        <div className="flex">
          <Field type="checkbox" className="border-sky-400 " defaultValue />
          <div className="px-3 text-white">
            I accept terms &amp; conditions 
          </div>
        </div>
        <div className="flex justify-center my-6">
          <button  className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
            Login
          </button>
        </div>
        <div className="flex justify-between items-center ">
          <div>
          
          <Link href="#" className="text-white-600 hover:text-white transition ease-in-out 0.5s pl-2"> Sign Up</Link>
          </div>

          <Link href="#" className="text-white-600 hover:text-white transition ease-in-out 0.5s pl-2"> forgot password</Link>

        </div>
      </Form>
      </Formik>
    </div>
  </div>
    
  )
}

export default page




