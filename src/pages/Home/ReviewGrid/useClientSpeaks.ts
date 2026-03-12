import { useEffect, useState } from "react";
import { getTestimonial } from "../../../api/testimonialService";
import type { ClientSpeak } from "./DTOs";

export const useClientSpeaks = () => {
  const [testimonials, setTestimonials] = useState<ClientSpeak[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonial();
        setTestimonials(response.data || []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, isLoading };
};