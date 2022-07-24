import { request, transformResponse } from '../core/http';

export const uploadTryout = async (file: File, type: 'tryout' | 'mwc4k') => {
  const form = new FormData();
  form.append('type', type);
  form.append('file', file);
  const res = await request.post('/api/upload_tryout', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  transformResponse(res);
};
