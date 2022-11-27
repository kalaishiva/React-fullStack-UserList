import React from 'react'

const UserList = () => {
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
            <tr className="bg-gray-100 border-b  ">
              <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Shiva
              </td>
              <td className="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
              <div className="inline-flex">
  <button className="bg-teal-600  hover:bg-teal-700 text-white font-bold py-2 px-7 mr-2 mt-2 rounded">
    Edit
  </button>
  <button className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded">
    Delete
  </button>
</div>
            </tr>

            <tr className="bg-white border-b">
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
            </tr>
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