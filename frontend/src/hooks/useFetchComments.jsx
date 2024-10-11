import React, { useEffect, useState } from 'react';
import { getAxiosInstance } from '../utils/axios';

function useFetchComments(postId,commentId) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [commentsData, setCommentsData] = useState([]);

    const fetchCommentsData = async () => {
        setLoading(true);
        try {
            const axiosInstance = await getAxiosInstance();
            const response = await axiosInstance.get(`/api/posts/${postId}/comments/${commentId}`);
            setCommentsData(response.data);
        } catch (e) {
            setError(e.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (postId) {
            fetchCommentsData();
        }
    }, [postId]);

    return { error, loading, commentsData }; 
}

export default useFetchComments;
