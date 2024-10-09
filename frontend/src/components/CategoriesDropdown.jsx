import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategories } from '../redux/features/categoriesSlice';
import useFetchCategories from '../hooks/useFetchCategories';
import useDeleteCategory from '../hooks/useDeleteCategory';
import AddCategoryForm from './AddCategoryForm';
import { MdDelete } from "react-icons/md";

const CategoriesDropdown = ({ setCategoryId, setShowDropdown }) => {
  const { categoriesData, fetchCategoriesData } = useFetchCategories();
  const [categoryInputVisible, setCategoryInputVisible] = useState(false);
  const dispatch = useDispatch();
  const { deleteCategory, loading: deleteLoading } = useDeleteCategory();

  useEffect(() => {
    if (categoriesData && categoriesData.length > 0) {
      dispatch(addCategories(categoriesData));
    }
  }, [categoriesData, dispatch]);

  const handleDelete = async (categoryId) => {
    const success = await deleteCategory(categoryId);
    if (success) {
      fetchCategoriesData();
    }
  };

  return (
<div className="absolute bg-slate-200 right-0 top-[100px] md:top-[60px] p-4 w-full md:w-[300px] max-h-[200px] overflow-y-auto shadow-lg rounded">
<ul>
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.map((category) => (
            <li key={category.id} className="flex justify-between items-center p-2 hover:bg-gray-200 cursor-pointer">
              <span 
                className={`cursor-pointer ${category.id === setCategoryId ? 'bg-gray-400' : ''}`}
                onClick={() => {
                  setCategoryId(category.id);
                  setShowDropdown(false);
                }}
              >
                {category.name}
              </span>
              <button 
                onClick={() => handleDelete(category.id)} 
                className="text-red-500 ml-2"
                disabled={deleteLoading}
              >
                {deleteLoading ? 'Deleting...' : <MdDelete/>}
              </button>
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
