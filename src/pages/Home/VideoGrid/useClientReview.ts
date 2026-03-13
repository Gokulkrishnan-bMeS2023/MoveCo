import { useState, useEffect } from "react";
import { getYouTubeVideos } from "../../../api/videoReviewService";
import type { Video } from "./DTOs";

export const useVideoGrid = (page: number, pageSize: number) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsVideoLoading(true);
      setError("");

      try {
        const response = await getYouTubeVideos({ page, pageSize });

        const items = response.items || [];

        const formatted: Video[] = items.map((item: any) => ({
          videoId: item.videoId,
          title: item.title,
          thumbnail: item.thumbnail,
        }));

        setVideos((prev) => (page === 1 ? formatted : [...prev, ...formatted]));

        setHasMore(items.length === pageSize);
      } catch (err) {
        setError("Failed to load videos");
      } finally {
        setIsVideoLoading(false);
      }
    };

    fetchVideos();
  }, [page, pageSize]);

  return { videos, isVideoLoading, error, hasMore };
};
