import request from 'utils/request';

export interface ITrade {
    id: number;
    datasourceName: string;
    datasourceType: string;
    businessType: string;
    ingestionType: string;
    consumeQueue: string;
    comment: string;
}

interface IResult {
    list: ITrade[];
}

interface IParams {
    pageSize: number;
    current: number;
}

const basePath = '/api/v1/trade'

export const getTradeList = async (params: any) => {
    const result = await request.get<any>(`${basePath}`);
    const data = result ? result : null;
    return {
        data,
    };
};

