/* eslint-disable max-len */
import React, { ReactNode } from 'react';
import { TryoutMap } from '../../data';
import { useTryoutMaps } from './hooks';
import { B, CP, TryoutContainer, TryoutMapItem } from './styles';

const TryoutMaps = () => {
  const tryoutMaps = useTryoutMaps();

  const renderItem = (item: TryoutMap) => {
    return item.url
      ? <TryoutMapItem href={item?.url} target="_blank">{item?.name}</TryoutMapItem>
      : item.name;
  };

  return (
    <>
      {tryoutMaps.map(item => {
        return (
          <React.Fragment key={item.id}>
            <CP><B>{item.label}</B></CP>
            <CP>
              {renderItem(item)}
            </CP>
            {item?.children && item.children.map(subItem => <CP key={subItem.id}>{renderItem(subItem)}</CP>)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export interface TryoutLine {
  key: string;
  type: 'h1' | 'h2' | 'p' | 'br' | 'CP' | 'B' | 'TryoutMaps' | 'h3' | 'a' | 'common';
  content: string | TryoutLine[];
  props?: Record<string, any>;
}

export interface TryoutContentProps {
  content: TryoutLine[];
}

const resolveBaseMap: Record<string, any> = {
  common: (text: string) => text,
  p: (children: ReactNode | ReactNode[], props: Record<string, any>) => <p {...props}>{children}</p>,
  h1: (children: ReactNode | ReactNode[], props: Record<string, any>) => <h1 {...props}>{children}</h1>,
  h2: (children: ReactNode | ReactNode[], props: Record<string, any>) => <h2 {...props}>{children}</h2>,
  h3: (children: ReactNode | ReactNode[], props: Record<string, any>) => <h3 {...props}>{children}</h3>,
  br: () => <br />,
  CP: (children: ReactNode | ReactNode[], props: Record<string, any>) => <CP {...props}>{children}</CP>,
  B: (children: ReactNode | ReactNode[], props: Record<string, any>) => <B {...props}>{children}</B>,
  a: (children: ReactNode | ReactNode[], props: Record<string, any>) => <a {...props}>{children}</a>,
  TryoutMaps: () => <TryoutMaps />,
};

const resolveBeautifulContent = (content: TryoutLine[]): ReactNode[] => {
  const resolve = (c: TryoutLine[]): ReactNode[] => {
    return c.map((item) => {
      const resolver = resolveBaseMap[item.type] || resolveBaseMap.p;
      if (typeof item.content === 'string') {
        return <React.Fragment key={item.key}>{resolver(item.content, item.props)}</React.Fragment>;
      }

      const node = resolve(item.content);
      return <React.Fragment key={item.key}>{resolver(node, item.props)}</React.Fragment>;
    });
  };

  return resolve(content);
};

export const TryoutContent = ({
  content = [],
}: TryoutContentProps) => {

  return (
    <TryoutContainer>
      {resolveBeautifulContent(content)}
    </TryoutContainer>
  );
};
