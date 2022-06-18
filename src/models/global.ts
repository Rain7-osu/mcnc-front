import { ConfigKeys } from '../common/config-keys';
import { IModel } from './types';

export interface IGlobalState {
  config: Partial<Record<ConfigKeys, any>>;
}

export const initState: IGlobalState = {
  config: {},
};

const model: IModel<IGlobalState> = {
  namespace: 'global',
  state: initState,
  reducers: {
    setConfig(state, { payload }) {
      return {
        ...state,
        config: payload,
      };
    },
  },
};

export default model;
