import React from 'react'

const Form = () => {
  return (
    <div >
           <div class="my-8">
              <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 text-purple-800 text-center">Form</h1>
            </div>

        <div class="block mx-auto p-14 rounded-lg shadow-2xl  border border-solid bg-white text-center  border-gray-200 max-w-sm">    
 <form >
     <div class="form-group mb-6 ">
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-lg
        font-medium
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-400
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
        placeholder="Name" />
    </div>
    <div class="form-group mb-6">
      <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-lg
        font-medium
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-400
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
        placeholder="Email address" />
    </div>
  
    <button type="submit" class="
      inline-block
      px-7 
      py-3
      bg-blue-600
      text-white
      font-medium
      text-lg
      leading-tight
      uppercase
      rounded
      shadow-md
      w-48
      
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Submit</button>
  </form>
</div>
    </div>
  )
}

export default Form