import { useNavigate } from 'react-router-dom';
import { PAGES } from '../Routes/routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategories } from '../redux/features/categoriesSlice';
import useFetchCategories from '../hooks/useFetchCategories';

function CategoriesComponent() {
  const { categoriesData, loading, error } = useFetchCategories();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (categoriesData && categoriesData.length > 0) {
      dispatch(addCategories(categoriesData)); 
    }
  }, [categoriesData, dispatch]);

  if (loading) return <p className="text-center text-lg text-blue-500">Loading categories...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  const handleCategoryClick = (categoryId, categoryName) => {
    navigate(
      PAGES.PostsByCategories
        .replace(':id', categoryId)        
        .replace(':name', categoryName)    
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Categories</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoriesData.map((category) => (
          <li
            key={category.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer uppercase"
            onClick={() => handleCategoryClick(category.id, category.name)} 
          >
            <h2 className="text-xl font-semibold text-gray-800 uppercase">{category.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesComponent;
