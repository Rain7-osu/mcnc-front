import { useConfig } from '../../hooks/useConfig';
import { ConfigKeys } from '../../common/config-keys';
import { isJson } from '../../utils/is-json';
import { TryoutMap } from '../../data';

export const useTryoutMaps = () => useConfig(ConfigKeys.TRYOUT_MAPS, (value): TryoutMap[] => {
  if (isJson(value)) {
    const json = JSON.parse(value);
    const arr = Array.isArray(json) ? json : [];
    return arr.map((item, index) => ({
      id: index,
      name: item.name || '',
      url: item.url || '',
      label: item.label || '',
    }));
  }

  return [];
});
