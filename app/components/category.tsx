import { getAllCategory } from '@/Request/request'
import React from 'react'

const Category = async() => {
  const categories: string[] = await getAllCategory();

  console.log(categories);
  return (
    <>
    <div className='pt-16 pb-12'>
    <h1 className='text-2xl font-bold text-center capitalize'>Shop by category</h1>

    {/* Define Gird */}
    <div className='mt-12 w-4/5 grid grid-cols-2 lg:gird-cols-4 xl:grid-cols-4 gap-8 mx-auto'>
    {
      categories.map((category, index) => (
        <div key={index} className='bg-gray-200 rounded-lg shadow-md p-6 cursor-pointer text-center hover:scale-110 transition-all duration-300 ease-in-out'>
          <h2 className='text-xl font-bold text-center capitalize'>{category}</h2>
        </div>
      ))
    }

    </div>
    </div>
    
    </>
  )
}

export default Category