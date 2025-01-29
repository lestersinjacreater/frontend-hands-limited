import { useState, useCallback } from 'react';
import { Update } from '../types/update';

export function useUpdates() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = () => localStorage.getItem('token');

  const fetchUpdates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch('https://rest-api-for-hands.onrender.com/updates', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch updates');
      }

      const data = await response.json();
      setUpdates(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    updates,
    loading,
    error,
    fetchUpdates,
  };
}