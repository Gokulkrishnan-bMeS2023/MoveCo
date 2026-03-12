import { api } from "../lib/axios";

export const getYouTubeVideos = (limit: number) => {
  return api.get("/youtube/videos", {
    params: { maxResults: limit },
  });
};