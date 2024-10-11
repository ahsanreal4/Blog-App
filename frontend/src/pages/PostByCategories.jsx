import { useParams } from 'react-router-dom'; 
import { categories } from '../CategoriesImages/CategoriesImages'; 
import useFetchPostByCategories from '../hooks/useFetchPostByCategories';
import LoadingSpinner from '../components/LoadingSpinner';
import CategoriesHeader from '../components/CategoriesHeader';
import PostsData from '../components/PostsData';
import Navbar from '../components/Navbar';

function PostByCategories() {
  const { id, name } = useParams(); 
  const categoryId = parseInt(id);
  const { postDataByCategories, loading, error } = useFetchPostByCategories(categoryId); 
  const category = Object.values(categories).find(cat => cat.name.toLowerCase() === name.toLowerCase());
 

  if (loading) return (
    <LoadingSpinner/>
  );
  
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  if (category) {
    return (
      <>

        <Navbar/>

        <div className="max-w-4xl mx-auto py-10">

        <CategoriesHeader category={category}/>
        <PostsData postDataByCategories={postDataByCategories}/>
        </div>

      </>
    );
  } else {
    return <p className="text-center text-lg text-red-500">Category not found</p>;
  }
  
}

export default PostByCategories;
