import { request, transformResponse } from '../core/http';
import { Sheet, SheetDocuments } from '../../data';

const transformSheets = (res: any[]): Sheet[] => {
  const arr = Array.isArray(res) ? res : [];
  return arr.map((item, index) => ({
    title: item.title,
    url: item.url,
    key: index,
  }));
};

const transformSheetDocuments = (res: any[]): SheetDocuments => {
  const arr = Array.isArray(res) ? res : [];
  return arr.map((item, index) => ({
    title: item.title,
    sheets: transformSheets(item.sheets),
    key: index,
  }));
};

export const getGoogleSheetDocuments = async (): Promise<SheetDocuments> => {
  const res = await request.get('/api/google_sheet_urls');
  const data = transformResponse(res);
  return transformSheetDocuments(data.data);
};

export const getHOCSheetDocuments = async (): Promise<SheetDocuments> => {
  const res = await request.get('/api/hoc_sheet_urls');
  const data = transformResponse(res);
  return transformSheetDocuments(data.data);
};

export const getCurrentGoogleSheets = async (): Promise<SheetDocuments> => {
  const res = await request.get('/api/current_google_sheet');
  const data = transformResponse(res);
  return transformSheetDocuments(data.data);
};
