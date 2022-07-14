export interface Sheet {
  title: string;
  url: string;
  key: number;
}

export interface Document {
  title: string;
  sheets: Sheet[];
  key: number;
}

export type SheetDocuments = Document[];

export interface TryoutMap {
  label: string;
  name: string;
  url: string;
  id: number;
}
