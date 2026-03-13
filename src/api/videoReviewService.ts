import { api } from "../lib/axios";

export interface GetVideoParams {
  page?: number;
  pageSize?: number;
}

export interface VideoResponse {
  items: {
    videoId: string;
    title?: string;
    thumbnail?: string;
  }[];
}

export const getYouTubeVideos = async (
  params?: GetVideoParams
): Promise<VideoResponse> => {
  const { data } = await api.get("/youtube/videos", { params });
  return data;
};