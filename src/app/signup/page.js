import Link from 'next/link'
import React from 'react'


export const metadata={
    title:"sign up page",
    description:"sign up page",
}


const page = () => {
  return (
    <div className="w-full  block   p-4 flex items-center justify-center">
  <div className="bg-transparent py-6 px-10 sm:max-w-md w-full ">
    <div className="sm:text-3xl text-4xl  font-bold text-center text-white mb-12">
      Registration Form 
    </div>
    <div >
      <div >
        <input type="text" className="focus:outline-none text-white  bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white" placeholder="Name " />
      </div>
      <div>
        <input type="email" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white my-8" placeholder="Eamil Adress " />
      </div>
      <div>
        <input type="text" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Country " />
      </div>
      <div>
        <input type="phone" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Phone " />
      </div>
      <div className="relative">
        <input type="password" className="focus:outline-none text-white bg-transparent border-b w-full pb-2 border-sky-400 placeholder-white mb-8" placeholder="Password " />
        

      </div>
      <div className="flex">
        <input type="checkbox" className="border-sky-400 " defaultValue />
        <div className="px-3 text-white">
          I accept terms &amp; conditions 
        </div>
      </div>
      <div className="flex justify-center my-6">
        <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
          Create Account
        </button>
      </div>
      <div className="flex justify-center ">
        <p className="text-white">Already have an acount? </p>
        <Link href="#" className="text-white-600 hover:text-white transition ease-in-out 0.5s pl-2"> Sign In</Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default page