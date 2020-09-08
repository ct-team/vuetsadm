import Vue from 'vue';
import Interface from '@/api/interface';

export const getTableList = (params: any, complete?: any) => {
  //@ts-ignore
  return Vue.$dart.http.ajax({
    method: 'get',
    url: Interface.tableList,
    data: params,
    complete
  });
};

export const getViewData = async (id: number) => {
  //@ts-ignore
  return Vue.$dart.http.ajax({
    method: 'get',
    url: Interface.viewData,
    data: { id }
  });
};

export const saveEditData = async (params: any) => {
  //@ts-ignore
  return Vue.$dart.http.ajax({
    method: 'post',
    url: Interface.edit,
    data: params
  });
};
