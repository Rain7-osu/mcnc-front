import { Sheet, SheetDocuments } from '../../data';
import { DocumentListContainer, DocumentItem, SheetListContainer } from './styles';

interface SheetListProps {
  sheets: Sheet[];
}

interface SheetDocumentProps {
  data: SheetDocuments;
}

export const SheetList = ({
  sheets,
}: SheetListProps) => {
  return (
    <SheetListContainer>
      {sheets.map((sheet) => {
        return (
          <div key={sheet.key} className="sheet-item">
            <a
              href={`/sheet?src=${sheet.url}`}
              target="_blank"
              rel="noreferrer"
            >
              {sheet.title}
            </a>
          </div>
        );
      })}
    </SheetListContainer>
  );
};

export const DocumentList = ({
  data,
}: SheetDocumentProps) => {
  return (
    <DocumentListContainer>
      {data.map(document => {
        return (
          <DocumentItem key={document.key}>
            <div className="document-title">{document.title}</div>
            <SheetList sheets={document.sheets} />
          </DocumentItem>
        );
      })}
    </DocumentListContainer>
  );
};
