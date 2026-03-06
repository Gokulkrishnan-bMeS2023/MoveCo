import axios from 'axios';

export const getYouTubeVideos = (limit: number) => {
  return axios.get('/api/youtube/videos', {
    params: {
      maxResults: limit 
    }
  });
};