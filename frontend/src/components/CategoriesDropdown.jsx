import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategories } from '../redux/features/categoriesSlice';
import useFetchCategories from '../hooks/useFetchCategories';
import AddCategoryForm from './AddCategoryForm';

const CategoriesDropdown = ({ setCategoryId, setShowDropdown }) => {
  const { categoriesData, fetchCategoriesData } = useFetchCategories();
  const [categoryInputVisible, setCategoryInputVisible] = useState(false);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (categoriesData && categoriesData.length > 0) {
      dispatch(addCategories(categoriesData));
    }
  }, [categoriesData, dispatch]);

  return (
    <div className='absolute bg-slate-200 right-0 top-[60px] p-4 w-[300px] max-h-[200px] overflow-y-auto shadow-lg rounded'>
      <ul>
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.map((category) => (
            <li
              key={category.id}
              className={`p-2 hover:bg-gray-200 cursor-pointer ${category.id === setCategoryId ? 'bg-gray-400' : ''}`}
              onClick={() => {
                setCategoryId(category.id);
                setShowDropdown(false);
              }}
            >
              {category.name}
            </li>
          ))
        ) : (
          <li className="p-2">No Categories Available</li>
        )}
      </ul>

      {categoryInputVisible ? (
        <AddCategoryForm
          setCategoryInputVisible={setCategoryInputVisible}
          fetchCategoriesData={fetchCategoriesData}
        />
      ) : (
        <button
          className='bg-blue-500 text-white text-center rounded p-3 w-full'
          onClick={() => setCategoryInputVisible(true)}
        >
          Add Categories
        </button>
      )}
    </div>
  );
};

export default CategoriesDropdown;
