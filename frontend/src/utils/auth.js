export const getAuthToken = async () => {
    return localStorage.getItem('token') || '';
  };