import { get, post } from '@/utils';
import { FormInfo, SearchRequest, ResponseInfo } from '@/types';

export const getTableList = async (param: SearchRequest) => {
  const ret: ResponseInfo = await get(`/api/list`, param);

  return ret;
};

export const getViewData = async (id: number) => {
  const ret: ResponseInfo = await get('/api/view', { id });

  return ret;
};

export const saveEditData = async (param: FormInfo) => {
  const ret = await post('/api/edit', param);

  return ret;
};
