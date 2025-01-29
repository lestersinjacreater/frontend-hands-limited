import { useState, useCallback } from 'react';
import { Service, ServiceFormData } from '../types/service';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = () => localStorage.getItem('token');

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch('https://rest-api-for-hands.onrender.com/services', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }

      const data = await response.json();
      setServices(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const getService = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/services/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch service');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateService = async (id: string, data: Partial<ServiceFormData>) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/services/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update service');
      }

      const updatedService = await response.json();
      setServices(prev => prev.map(service => 
        service.id === id ? updatedService : service
      ));
      
      return updatedService;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete service');
      }

      setServices(prev => prev.filter(service => service.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    services,
    loading,
    error,
    fetchServices,
    getService,
    updateService,
    deleteService,
  };
}