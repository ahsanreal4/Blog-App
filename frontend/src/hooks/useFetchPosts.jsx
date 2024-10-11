import { useState, useEffect } from 'react';
import { getAxiosInstance } from '../utils/axios';

export const useFetchPosts = (page, pageSize, sortBy, sortDir) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [last, setLast] = useState(false);  
    const [totalPosts, setTotalPosts] = useState(0);  

    const fetchPostData = async () => {
        setLoading(true);
        setError(null); 
        try {
            const axiosInstance = await getAxiosInstance();
            const response = await axiosInstance.get('/api/posts', {
                params: {
                    pageNo: page,
                    pageSize: pageSize,
                    sortBy: sortBy,
                    sortDir: sortDir,
                },
            });

            const postsData = Array.isArray(response.data.content) ? response.data.content : [];
            setPosts(postsData);
            setLast(response.data.last);  
            setTotalPosts(response.data.totalElements);  
        } catch (e) {
            setError(e.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPostData();
    }, [page, pageSize, sortBy, sortDir]);

    return { posts, loading, error, last, totalPosts };
};
