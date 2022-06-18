import { ConfigKeys } from '../common/config-keys';
import { useAction, useSelector } from '../common/dvaHooks';

export const useConfig = <T = string>(key: ConfigKeys, format?: (value: string) => T): T => {
  const config = useSelector(({ global }) => global.config);
  const preValue = config[key] || '';
  return format?.(preValue) || preValue;
};

export const useSwitchConfig = (switchKey: ConfigKeys): boolean => {
  const config = useConfig(switchKey);
  return 'true' === config;
};

export const useSetConfig = () => {
  return useAction<Partial<Record<ConfigKeys, any>>>('global/setConfig');
};
