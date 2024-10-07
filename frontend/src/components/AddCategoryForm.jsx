import React, { useState } from 'react';
import useCreateCategories from '../hooks/useCreateCategories';

const AddCategoryForm = ({ setCategoryInputVisible, fetchCategoriesData }) => {
  const { name, setName, createCategory, loading: categoryLoading, error: categoryError } = useCreateCategories();

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await createCategory();
      setName('');
      setCategoryInputVisible(false);
      fetchCategoriesData();  // Re-fetch categories after adding the new one
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <form onSubmit={handleAddCategory}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        className="border-b-2 border-gray-400 focus:outline-none p-2 w-full mb-4"
        required
      />
      <button className='bg-blue-500 text-white w-full p-2 rounded' disabled={categoryLoading}>
        {categoryLoading ? 'Adding...' : 'Add Category'}
      </button>
      {categoryError && <p className="text-red-500 mt-2">{categoryError}</p>}
    </form>
  );
};

export default AddCategoryForm;
