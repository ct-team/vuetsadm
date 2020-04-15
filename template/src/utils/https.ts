/* eslint-disable */
import axios from 'axios';

import { Message } from 'element-ui';

import { ResponseInfo } from '@/types/index';

const baseURL = '';

const service: any = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    crossDomain: true,
    withCredentials: true,
    validateStatus(status: any) {
        return status >= 200 && status < 500;
    }
});

// 请求拦截

service.interceptors.request.use(
    (originConfig: any) => {
        const reqConfig = { ...originConfig };

        if (!reqConfig.url) {
            throw new Error('request need url');
        }
        if (!reqConfig.method) {
            reqConfig.method = 'get';
        }

        reqConfig.method = reqConfig.method.toLowerCase();

        // 参数容错
        if (reqConfig.method === 'get') {
            // 防止字段用错
            if (!reqConfig.params) {
                reqConfig.params = reqConfig.data || {};
            }
        } else if (reqConfig.method === 'post') {
            // 防止字段用错
            if (!reqConfig.data) {
                reqConfig.data = reqConfig.params || {};
            }
        } else {
            // TODO: 暂无其他类型的处理
        }
        return reqConfig;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

// 响应拦截

service.interceptors.response.use(
    (response: any) => {
        const res: ResponseInfo = response.data;

        if (res.code !== 0) {
            Message({
                message: res.message || 'error',
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject(res.message || 'error');
        }
        return res;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export function post(url: string, data: object = {}, headers: object = {}, params: object = {}) {
    return service({
        method: 'post',
        url,
        data,
        params,
        headers
    });
}

export function get(url: string, params: object = {}, headers: object = {}) {
    return service({
        method: 'get',
        url,
        params,
        headers
    });
}
