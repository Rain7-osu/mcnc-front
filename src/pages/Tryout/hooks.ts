import { useConfig } from '../../hooks/useConfig';
import { ConfigKeys } from '../../common/config-keys';
import { isJson } from '../../utils/is-json';
import { TryoutMap } from '../../data';
import { TryoutLine } from './TryoutContent';
import { defaultContent } from './default.js';

const transformItem = (item: any, index: number) => {
  return {
    id: index,
    name: item.name || '',
    url: item.url || '',
    label: item.label || '',
    children: item?.children?.map((item: any, index: number) => transformItem(item, index)),
  };
};

export const useTryoutMaps = () => useConfig(ConfigKeys.TRYOUT_MAPS, (value): TryoutMap[] => {
  if (isJson(value)) {
    const json = JSON.parse(value);
    const arr = Array.isArray(json) ? json : [];
    return arr.map((item, index) => transformItem(item, index));
  }

  return [];
});

export const useTryoutContent = () => useConfig(ConfigKeys.TRYOUT_CONTENT, (value): TryoutLine[] => {
  if (isJson(value)) {
    const json = JSON.parse(value);
    return Array.isArray(json) ? json : defaultContent;
  }

  return [];
});
