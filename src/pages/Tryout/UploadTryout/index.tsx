import { ChangeEvent } from 'react';
import { useRequest } from 'ahooks';
import { UploadButton } from '../../../components/UploadButton';
import { uploadTryout } from '../../../services/requests/upload-tryout';
import { Container } from './styles';

export const UploadTryout = () => {
  const { run } = useRequest(
    uploadTryout,
    {
      manual: true,
      onSuccess() {
        // eslint-disable-next-line no-alert
        alert('上传成功！');
      },
      onError() {
        // eslint-disable-next-line no-alert
        alert('上传失败！');
      },
    },
  );

  const handleUpload = (e: ChangeEvent<HTMLInputElement>, type: 'tryout' | 'mwc4k') => {
    const file = e.target.files?.[0];
    file && run(file, type);
  };

  return (
    <Container>
      <UploadButton
        title="点击上传 Tryout 回放与截图"
        desc="（请将 .osr 文件与截图打包至压缩文件）"
        onUpload={(e) => handleUpload(e, 'tryout')}
      />
      <UploadButton
        title="点击上传 MWC 4K 2021 回放与截图"
        desc="（请将 .osr 文件与截图打包至压缩文件）"
        onUpload={(e) => handleUpload(e, 'mwc4k')}
      />
    </Container>
  );
};
