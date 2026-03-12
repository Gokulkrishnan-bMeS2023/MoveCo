import { useEffect, useState } from "react";
import type { Video } from "../VideoGrid";
import { getYouTubeVideos } from "../../../api/videoReviewService";

export const useVideoGrid = (limit?: number) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (videos.length === 0) {
          setIsLoading(true);
        }

        const response = await getYouTubeVideos(limit ?? 10);
        setVideos(response.data || []);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [limit]);

  return { videos, isLoading };
};