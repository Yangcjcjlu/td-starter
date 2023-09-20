
import request from 'utils/request';

export interface IDatasource {
    id: number;
    // datasourceName: string;
    // datasourceType: string;
    // businessType: string;
    // ingestionType: string;
    // consumeQueue: string;
    // comment: string;
}

interface IResult {
    list: IDatasource[];
}

interface IParams {
    pageSize: number;
    current: number;
}

const basePath = '/api/v1/dataSource'




export const getIndexTableList = async (params: any) => {
    const result = await request.get<any>(`${basePath}`, { params: params });

    // 模拟接口分页
    let list = result?.data || [];
    const total = list.length;
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        list,
        total,
    };
};


// export const updateDataSource = async (params: IParams, data: any) => {
//     const result: any = await request.post<any>('/ds/update', data);
//     // 模拟接口分页
//     const code = result?.code;
//     // let list = result?.page || [];
//     // const total = list.length;
//     // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
//     return {
//         code
//     };
// };