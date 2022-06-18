import { ReactNode } from 'react';
import { useRequest } from 'ahooks';
import { getConfig } from '../services/requests/get-config';
import { useSetConfig } from '../hooks/useConfig';
import { LayoutWrapper, MainWrapper } from './styles';
import { Navigator } from './Navigator';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: ReactNode }) => {
  const setConfig = useSetConfig();

  useRequest(
    getConfig,
    {
      onSuccess(data) {
        setConfig(data);
      },
    },
  );

  return (
    <LayoutWrapper>
      <Navigator />
      <MainWrapper>
        {children}
      </MainWrapper>
      <Footer />
    </LayoutWrapper>
  );
};
