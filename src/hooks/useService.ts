import { useState, useCallback } from 'react';
import { Service, ServiceFormData } from '../types/service';
import { uploadToCloudinary } from '../utils/cloudinary';

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

  const createService = async (data: ServiceFormData) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      let imageUrl = null;
      if (data.image) {
        imageUrl = await uploadToCloudinary(data.image);
      }
      
      const response = await fetch('https://rest-api-for-hands.onrender.com/services', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create service');
      }

      const newService = await response.json();
      setServices(prev => [newService, ...prev]);
      return newService;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateService = async (id: number, data: ServiceFormData) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      let imageUrl = null;
      if (data.image) {
        imageUrl = await uploadToCloudinary(data.image);
      }
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/services/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          ...(imageUrl && { imageUrl }),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update service');
      }

      const updatedService = await response.json();
      setServices(prev => prev.map(service => 
        service.serviceid === id ? updatedService : service
      ));
      
      return updatedService;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id: number) => {
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

      setServices(prev => prev.filter(service => service.serviceid !== id));
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
    createService,
    updateService,
    deleteService,
  };
}
