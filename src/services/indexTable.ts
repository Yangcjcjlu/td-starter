
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





export const getIndexTableList = async (params: { pageSize: number; current: number, name?: string }) => {

    let basePath = '/api/v1/mergedIndex';

    if(params.pageSize && params.current){
        basePath += `?pageNumber=${params.current}&pageSize=${params.pageSize}`
    }

    const result = await request.get<any>(`${basePath}`);
    console.log("merged index==>");
    console.log(JSON.stringify(result));
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