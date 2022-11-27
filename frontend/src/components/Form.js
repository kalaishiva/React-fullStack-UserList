import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {

    //To store the value from Frontend
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    console.log(userName, userEmail);

    //Function to send Data
    const submitData = async() =>{
        const data = {
            name: userName,
            email: userEmail,
        }
        const res = await axios.post("/createUser", data);
        console.log(res);
    };

     //To handle default submission
     const handleSubmit = (event) =>{
        event.preventDefault();
        submitData();

      //empty the name and email once submit
      setUserName("");
      setUserEmail("");  
    }


  return (
    <div>
           <div className="my-8">
              <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-purple-800 text-center">Form</h1>
            </div>

      
        <div className="block mx-auto p-14 rounded-lg shadow-2xl  border border-solid bg-white text-center  border-gray-200 max-w-sm">    
 <form onSubmit={handleSubmit}>
     <div className="form-group mb-6 ">
      <input type="text" className="form-control block
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
        placeholder="Name" 
        value={userName} onChange={(event) => {setUserName(event.target.value)}}/>

    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
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
        placeholder="Email address"
        value={userEmail} onChange={(event)=> {setUserEmail(event.target.value)}} />
    </div>
  
    <button type="submit" className="
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