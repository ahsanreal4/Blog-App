import React from 'react'

function CategoriesHeader({ category }) {
  return (
    <>
  <div className="mb-8 text-center">
      <img src={category.imageUrl} alt={category.name} className="w-full h-auto rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold mt-4 text-gray-800 uppercase">{category.name} </h1>
    </div>
    </>

)
}

export default CategoriesHeader