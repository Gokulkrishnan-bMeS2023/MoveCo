import { useState, useEffect } from "react";
import { getProducts } from "../../../api/productService";
import type { Product } from "./DTOs";

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await getProducts();
        if (!cancelled) {
          setProducts(res?.data?.data || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Failed to load products. Please try again.");
          console.error("Error fetching products:", err);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, [trigger]);

  const refetch = () => setTrigger((t) => t + 1);

  return { products, isLoading, error, refetch };
};
