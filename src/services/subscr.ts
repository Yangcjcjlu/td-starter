import request from 'utils/request';

const basePath = '/api/v1'

export interface ISubscr {
    id: number;
    subscrName: string;
    subscrType: string;
    subscrTopic: string;
}

export const getSubscrs = async () => {
    const result = await request.get<any>(`${basePath}/subscr`);
    const data = result ? result : null;
    return data;
}