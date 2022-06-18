import { request, transformResponse } from '../core/http';
import { transformConfig } from '../tools/transform-config';

export const getConfig = async () => {
  const res = await request.get('/api/config');
  const data = transformResponse(res);
  return transformConfig(data);
};
