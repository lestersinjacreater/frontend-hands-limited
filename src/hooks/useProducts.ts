import { useState, useCallback } from 'react';
import { Product, ProductFormData } from '../types/product';
import { uploadToCloudinary } from '../utils/cloudinary';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = () => localStorage.getItem('token');

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch('https://rest-api-for-hands.onrender.com/products', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const createProduct = async (data: ProductFormData) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      // First upload image to Cloudinary if it exists
      let imageUrl = null;
      if (data.image) {
        imageUrl = await uploadToCloudinary(data.image);
      }
      
      // Then send product data with image URL to your API
      const response = await fetch('https://rest-api-for-hands.onrender.com/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          imageUrl: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      const newProduct = await response.json();
      setProducts(prev => [newProduct, ...prev]);
      return newProduct;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id: number, data: ProductFormData) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      // First upload new image to Cloudinary if it exists
      let imageUrl = null;
      if (data.image) {
        imageUrl = await uploadToCloudinary(data.image);
      }
      
      // Then send updated product data with image URL to your API
      const response = await fetch(`https://rest-api-for-hands.onrender.com/products/${id}`, {
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
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      setProducts(prev => prev.map(product => 
        product.productid === id ? updatedProduct : product
      ));
      
      return updatedProduct;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      const token = getToken();
      
      const response = await fetch(`https://rest-api-for-hands.onrender.com/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      setProducts(prev => prev.filter(product => product.productid !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
