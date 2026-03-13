// import { api } from "../lib/axios";

// export const getYouTubeVideos = (pageSize: number, pageToken?: string) => {
//   return api.get("/youtube/videos", {
//     params: { 
//       pageSize: pageSize,   
//       pageToken: pageToken 
//     },
//   });
// };


import { api } from "../lib/axios";

export interface Video {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

export interface YouTubeVideoResponse {
  items: Video[];
  nextPageToken?: string;
}

export const getYouTubeVideos = async (
  pageSize: number,
  pageToken?: string
): Promise<YouTubeVideoResponse> => {
  const response = await api.get("/youtube/videos", {
    params: {
      pageSize,
      pageToken,
    },
  });

  return response.data;
};