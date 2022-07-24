import { ChangeEventHandler, ReactNode } from 'react';
import { Container } from './styles';

export interface UploadButtonProps {
  title: ReactNode;
  desc: ReactNode;
  onUpload: ChangeEventHandler<HTMLInputElement>;
}

export const UploadButton = ({
  title,
  desc,
  onUpload,
}: UploadButtonProps) => {
  return (
    <Container component="label">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <input
        hidden
        type="file"
        multiple={false}
        accept="application/zip"
        onChange={onUpload}
      />
    </Container>
  );
};
