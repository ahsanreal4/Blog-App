// src/hooks/useFetchPostById.js
import { useEffect, useState } from 'react'
import { getAxiosInstance } from '../utils/axios'

function useFetchPostById(id) { 
    const [postDataById, setPostDataById] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchPostDataById = async () => {
        if (!id) {
            setError('Invalid post ID.')
            return
        }

        setLoading(true)
        setError(null) 
        try {
            console.log(`Fetching post with ID: ${id}`) 
            const axiosInstance = await getAxiosInstance()
            const response = await axiosInstance.get(`/api/posts/${id}`) 
            setPostDataById(response.data)
        } catch (e) {
            console.error('Error fetching post:', e) 
            if (e.response && e.response.data && e.response.data.message) {
                setError(e.response.data.message)
            } else if (e.message) {
                setError(e.message)
            } else {
                setError('An unknown error occurred.')
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPostDataById()
    }, [id]) 

    return { error, loading, postDataById }
}

export default useFetchPostById
