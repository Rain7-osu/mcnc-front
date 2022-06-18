import { useState } from 'react';
import { useBoolean, useRequest } from 'ahooks';
import { Snackbar } from '@mui/material';
import { getGoogleSheetDocuments } from '../../services/requests/get-google-sheet-documents';
import { DocumentList } from '../../components/DocumentList';
import { Page } from './styles';

export const CurrentCompetition = () => {
  const [open, { setTrue, setFalse }] = useBoolean();
  const [message, setMessage] = useState('');
  const { data: sheetDocuments } = useRequest(
    getGoogleSheetDocuments,
    {
      onError(err) {
        setTrue();
        setMessage(String(err));
      },
    },
  );

  return (
    <Page>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        message={message}
        onClose={setFalse}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <div className="page-title">本期赛事</div>
      <DocumentList data={sheetDocuments || []} />
    </Page>
  );
};
