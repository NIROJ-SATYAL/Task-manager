"use client"
import Link from 'next/link'
import React from 'react'
import { Form,Formik,ErrorMessage,Field } from 'formik'
import * as yup from "yup";


export const metadata={
    title:"sign up page",
    description:"sign up page",
}

const initialValues={
    name:"",
    email:"", 
    country:"",
    phone:"",
    password:"",
}
const validationSchema = yup.object({ 
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    country: yup.string().required("Required"),
    phone: yup.string().required("Required"),
    password: yup.string().required("Required").min(8, "Password is too short - should be 8 chars minimum."),
  });
    

// const onSubmit = (values) => {
//     console.log("Form data", values);
//   };






const page = () => {
  document.title=metadata.title
  return (
    <div className="w-full  block   p-4 flex items-center justify-center">
  <div className="bg-transparent py-6 px-10 sm:max-w-md w-full ">
    <div className="sm:text-3xl text-4xl  font-bold text-center text-white mb-12">
      Registration Form 
    </div>
    <Formik
    initialValues={initialValues}
    onSubmit={(values) => {console.log(values)}}
    validationSchema={validationSchema}
    >
    <Form >
      <div >
        <Field type="text" className="focus:outline-none text-white  bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white" placeholder="Name " name="name" />
        <ErrorMessage name="name" />
      </div>
      <div>
        <Field type="email" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white my-8" placeholder="Eamil Adress "  name="email"/>
        <ErrorMessage name="email" />
      </div>
      <div>
        <Field type="text" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Country " name="country" />
        <ErrorMessage name="country" />
      </div>
      <div>
        <Field type="phone" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Phone " name="phone" />
        <ErrorMessage name="phone" />
      </div>
      <div className="relative">
        <Field type="password" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Password "  name="password"/>
        <ErrorMessage name="password" />
        

      </div>
      {/* <div className="flex">
        <Field type="checkbox" className="border-sky-400 " defaultValue />
        <div className="px-3 text-white">
          I accept terms &amp; conditions 
        </div> */}
      {/* </div> */}
      <div className="flex justify-center my-6">
        <button  className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
          Create Account
        </button>
      </div>
      <div className="flex justify-center ">
        <p className="text-white">Already have an acount? </p>
        <Link href="#" className="text-white-600 hover:text-white transition ease-in-out 0.5s pl-2"> Sign In</Link>
      </div>
    </Form>
    </Formik>
  </div>
</div>

  )
}

export default page