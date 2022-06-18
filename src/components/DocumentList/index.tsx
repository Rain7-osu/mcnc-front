import { SheetDocuments } from '../../data';
import { DocumentListContainer, DocumentItem } from './styles';

interface SheetDocumentProps {
  data: SheetDocuments;
}

export const DocumentList = ({
  data,
}: SheetDocumentProps) => {
  return (
    <DocumentListContainer>
      {data.map(document => {
        return (
          <DocumentItem key={document.key}>
            <div className="document-title">{document.title}</div>
            <div className="sheets">
              {document.sheets.map((sheet) => {
                return (
                  <div key={sheet.key} className="sheet-item">
                    <a
                      href={sheet.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {sheet.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </DocumentItem>
        );
      })}
    </DocumentListContainer>
  );
};
