import { api } from "./api";

export const getYouTubeVideos = (limit: number) => {
  return api.get("/youtube/videos", {
    params: { maxResults: limit },
  });
};