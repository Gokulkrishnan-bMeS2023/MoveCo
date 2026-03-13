import { useState, useEffect } from "react";
import { getTestimonial } from "../../../api/testimonialService";
import type { ClientSpeak } from "./DTOs";

export const useClientSpeaks = (page: number, pageSize: number) => {
  const [testimonials, setTestimonials] = useState<ClientSpeak[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await getTestimonial({ page, pageSize });

        const items = response?.data?.items || [];

        const formatted: ClientSpeak[] = items.map((item: any) => ({
          id: item.testimonialID,
          firstName: item.firstName,
          lastName: item.lastName,
          comments: item.comments,
          image: "",
        }));

        setTestimonials((prev) =>
          page === 1 ? formatted : [...prev, ...formatted]
        );

        setHasMore(items.length === pageSize);
      } catch (err) {
        setError("Failed to load testimonials");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, [page, pageSize]);

  return { testimonials, isLoading, error, hasMore };
};