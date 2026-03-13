// // import { useEffect, useState } from "react";
// // import { getYouTubeVideos } from "../../../api/videoReviewService";
// // import type { Video } from "./DTOs";

// // export const useVideoGrid = (limit?: number) => {
// //   const [videos, setVideos] = useState<Video[]>([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchVideos = async () => {
// //       try {
// //         if (videos.length === 0) {
// //           setIsLoading(true);
// //         }
// //         const response = await getYouTubeVideos(limit ?? 10);
// //         setVideos(response.data || []);
// //       } catch (error) {
// //         console.error("Failed to fetch videos:", error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchVideos();
// //   }, [limit]);

// //   return { videos, isLoading };
// // };




// import { useEffect, useState, useCallback } from "react";
// import { getYouTubeVideos } from "../../../api/videoReviewService";
// import type { Video } from "./DTOs";

// export const useVideoGrid = (limit: number = 10) => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [nextPageToken, setNextPageToken] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const fetchVideos = useCallback(
//     async (token?: string) => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await getYouTubeVideos(limit, token);
//         const newVideos: Video[] = response.data.items || [];

//         // Append new videos
//         setVideos(prev => [...prev, ...newVideos]);

//         // Save nextPageToken
//         setNextPageToken(response.data.nextPageToken || null);
//       } catch (err) {
//         console.error("Failed to fetch videos:", err);
//         setError("Failed to load videos");
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [limit]
//   );

//   useEffect(() => {
//     // Initial fetch
//     fetchVideos();
//   }, [fetchVideos]);

//   return { videos, isLoading, error, nextPageToken, fetchVideos };
// };




import { useEffect, useState, useCallback } from "react";
import { getYouTubeVideos } from "../../../api/videoReviewService";
import type { Video } from "./DTOs";

export const useVideoGrid = (limit: number) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getYouTubeVideos(limit);
      setVideos(data.items || []);
    } catch (err) {
      console.error("Video API Error:", err);
      setError("Failed to fetch videos");
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, isLoading, error };
};