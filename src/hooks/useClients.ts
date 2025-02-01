import { useState, useCallback } from 'react';

export function useClients() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = () => localStorage.getItem('token');

  const fetchClients = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch('https://rest-api-for-hands.onrender.com/clients', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch clients');
      }

      const data = await response.json();
      setClients(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const getClient = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/clients/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch client');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateClient = async (id: string, data: Partial<any>) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update client');
      }

      const updatedClient = await response.json();
      setClients(prev => prev.map(client => 
        client.clientid === id ? updatedClient : client
      ));
      
      return updatedClient;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/clients/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete client');
      }

      setClients(prev => prev.filter(client => client.clientid !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    clients,
    loading,
    error,
    fetchClients,
    getClient,
    updateClient,
    deleteClient,
  };
}