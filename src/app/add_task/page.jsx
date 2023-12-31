"use client"
import React from "react";
import { Formik ,Form , Field , ErrorMessage} from "formik";
import * as yup from "yup";

export const metadata = {
  title: "Add Task",
  description: "Add Task",
};


const initialValues = {
  title: "",
  content: "",
  deadline: "",
  status: "",
};

const validationSchema = yup.object({
  title: yup
    .string()
   
    .required("Title must be required"),
  content: yup
    .string()
    .required("Content must be required"),
  deadline: yup
    .string()
    .required("Deadline must be required"),
  
});

const page = () => {
  return (
    <div className="grid grid-cols-12 items-center  justify-center">
      <div className="grid col-span-8 mb-3 mt-3 md:col-span-6 bg-transparent col-start-3 md:col-start-4 shadow shadow-2xl p-5">
        <h1 className="text-bold text-center text-white mb-4 ">
          Add your Task Here!!!
        </h1>
<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values)=>console.log(values)}>
        <Form className="flex flex-col space-y-5">
          <div className="mt-2">
          <label htmlFor="" className="">
            Title
          </label>
          <Field
          name='title'  
            type="text"
            placeholder="Task Name"
            className="w-full p-2 my-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          />
          <div className="text-red-600 text-bold">
          <ErrorMessage name='title' />
          </div>
          </div>
          <div className="mt-2">
          <label htmlFor="">Content</label>

<Field
name='content'
  type="text"
  row={3}
  placeholder="Task Description"
  className="w-full p-2 my-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
/>
<div className="text-red-600 text-bold ">
<ErrorMessage name='content' />
</div>

          </div>
          <div className="mt-2">
          <label htmlFor="" className="">
            Task DeadLine
          </label>
          <Field
          name='deadline'
            type="date"
            placeholder="Task Deadline"
            className="w-full p-2 my-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
          />
          <div className="text-red-600 text-bold">
          <ErrorMessage name='deadline' />
          </div>
          
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <Field
            name='status'
              as="select"
              id="task_status"
              placeholder="Task Status"
              className="w-full p-2 my-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            
           
            >

              <option value="none"  selected disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </Field>
           
          </div>
          <button className="bg-transparent px-5 text-center  rounded-2xl  hover:bg-slate-500 ease-in-out 0.5s ">
            Add Task
          </button>
        </Form>
        </Formik>
      </div>
    </div>
  );
};

export default page;
