// api.js
import { useState, useEffect } from 'react';
import { api } from './axiosinstance';

const useApi = (deps, setIsAuthenticated) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get('/api/user');
        setData(response.data);
        setError(null);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("not authenticated")
          localStorage.removeItem('isAuthenticated');
          setIsAuthenticated(false);
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, deps);

  return { data, loading, error };
};

export default useApi;