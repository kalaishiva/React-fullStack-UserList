import React, {useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const resp = await axios.get("/getUsers");
    console.log(resp);
  

  //if no users are there . Dont set the value

if(resp.data.users.length > 0){
  setUserData(resp.data.users)
}
  };

  useEffect(() => {
    fetchUserData();
  }, [userData]);

  //HandleEdit
  const handleEdit = async (user) => {
    const userName = prompt('Please enter the name');
    const userEmail = prompt('Please enter the email');

if(!userName || !userEmail){
  alert("Please enter both the name and the email");
}else{
  const resp = await axios.put(`/editUsers/${user._id}`,
  {
    name: userName,
    email: userEmail,
  } );
  console.log(resp);

}

  };

  //Handle Delete

  const handleDelete = async(userId) => {
    const resp = await axios.delete(`/deleteUser/${userId}`)
    console.log(resp);
  }


  return (
    <div className="mt-[6rem]">
         <div className="my-6">
              <h1 className="font-medium leading-tight text-4xl mb-[50px] text-purple-800 text-center">User Lists</h1>
            </div>

            <div className="flex flex-col shadow-2xl rounded-lg border border-solid border-gray-200 w-3/5 text-center mx-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-2xl font-semibold text-cyan-700 px-6 py-4 text-center">
                Name
              </th>
             
              <th scope="col" className="text-2xl font-semibold text-cyan-700 px-6 py-4 text-center">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            { userData && userData.map((user)=>(
               <tr className="bg-gray-100 border-b ">
               <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                 {user.name}
               </td>
               <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                 {user.email}
               </td>
               <div className="inline-flex">
   <button className="bg-teal-600  hover:bg-teal-700 text-white font-bold py-2 px-7 mr-2 mt-2 rounded" 
   onClick={() => handleEdit(user)}>
     Edit
   </button>
   <button className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded"
   onClick={() => handleDelete(user._id)}>
     Delete
   </button>
 </div>
             </tr>

            ))}
           

           {/*  <tr className="bg-white border-b">
              <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
             
              <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                @fat
              </td>
              <div className="inline-flex">
  <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 mr-2 mt-2 rounded">
    Edit
  </button>
  <button className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded">
    Delete
  </button>
</div>
            </tr>
            <tr className="bg-gray-100 border-b">
            <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                kalai
              </td>
              <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
              <div className="inline-flex">
  <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-7 mr-2 mt-2 rounded">
    Edit
  </button>
  <button className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded">
    Delete
  </button>
</div>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserList