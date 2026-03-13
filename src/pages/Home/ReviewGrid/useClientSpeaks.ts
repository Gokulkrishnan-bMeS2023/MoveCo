// // import { useEffect, useState } from "react";
// // import { getTestimonial } from "../../../api/testimonialService";
// // import type { ClientSpeak } from "./DTOs";

// // export const useClientSpeaks = () => {
// //   const [testimonials, setTestimonials] = useState<ClientSpeak[]>([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchTestimonials = async () => {
// //       try {
// //         const response = await getTestimonial();
// //         setTestimonials(response.data || []);
// //       } catch (error) {
// //         console.error("Failed to fetch testimonials:", error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchTestimonials();
// //   }, []);

// //   return { testimonials, isLoading };
// // };





// import { useState, useEffect, useCallback } from "react";
// import { getTestimonial } from "../../../api/testimonialService";
// import type { ClientSpeak } from "./DTOs";

// export const useClientSpeaks = (page: number, pageSize: number) => {
//   const [testimonials, setTestimonials] = useState<ClientSpeak[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchTestimonials = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await getTestimonial({ page, pageSize });
//       const items = response.data?.items || [];
//       const data: ClientSpeak[] = items.map((item: { testimonialID: any; firstName: any; lastName: any; comments: any; }) => ({
//         id: item.testimonialID,
//         firstName: item.firstName,
//         lastName: item.lastName,
//         comments: item.comments,
//         image: "", 
//       }));
//       setTestimonials(prev => (page === 1 ? data : [...prev, ...data]));
//       setHasMore(items.length === pageSize);
//     } catch (err) {
//       setError("Failed to load testimonials.");
//     } finally {
//       setIsLoading(false);
//     }
//   }, [page, pageSize]);

//   useEffect(() => {
//     fetchTestimonials();
//   }, [fetchTestimonials]);

//   return { testimonials, isLoading, error, hasMore, refetch: fetchTestimonials };
// };






import { useState, useEffect } from "react";
import { getTestimonial } from "../../../api/testimonialService";
import type { ClientSpeak } from "./DTOs";

export const useClientSpeaks = (page: number, pageSize: number) => {
  const [testimonials, setTestimonials] = useState<ClientSpeak[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);

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