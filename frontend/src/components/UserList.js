import React from 'react'

const UserList = () => {
  return (
    <div class="mt-[6rem]">
         <div class="my-6">
              <h1 class="font-medium leading-tight text-4xl mb-[50px] text-purple-800 text-center">User Lists</h1>
            </div>

            <div class="flex flex-col shadow-2xl rounded-lg border border-solid border-gray-200 w-3/5 text-center mx-auto">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-2xl font-semibold text-cyan-700 px-6 py-4 text-center">
                Name
              </th>
             
              <th scope="col" class="text-2xl font-semibold text-cyan-700 px-6 py-4 text-center">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b  ">
              <td class="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Shiva
              </td>
              <td class="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
              <div class="inline-flex">
  <button class="bg-teal-600  hover:bg-teal-700 text-white font-bold py-2 px-7 mr-2 mt-2 rounded">
    Edit
  </button>
  <button class="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded">
    Delete
  </button>
</div>
            </tr>

            <tr class="bg-white border-b">
              <td class="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
             
              <td class="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                @fat
              </td>
              <div class="inline-flex">
  <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 mr-2 mt-2 rounded">
    Edit
  </button>
  <button class="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded">
    Delete
  </button>
</div>
            </tr>
            <tr class="bg-gray-100 border-b">
            <td class="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                kalai
              </td>
              <td class="text-base text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
              <div class="inline-flex">
  <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-7 mr-2 mt-2 rounded">
    Edit
  </button>
  <button class="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 mt-2 rounded">
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