import { request, transformResponse } from '../core/http';

export const getVideoLink = async (): Promise<string[]> => {
  const res = await request.get('/api/tournament_videos');
  const data = transformResponse(res);
  return Array.isArray(data.video_list) ? data.video_list : [];
};
