import request from 'utils/request';

export interface IDatasource {

    id: number;
    name: string;
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    accessKey: string;
    secretKey: string;
    bucketName: string;
    region: string;
    topic: string;
    consumerGroup: string;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date
}

interface IResult {
    list: IDatasource[];
}

interface IParams {
    pageSize: number;
    current: number;
}


export const getDataSource = async (params: any) => {
    const id = params?.id || 0;
    const result = await request.get<any>(`/ds/get/detail?id=${id}`); 
    const data = result?.page || [];
    return {
        data,
    };
};

export const getDataSourceList = async (params: any) =>{
    const result = await request.get<any>('/ds/list',params);    
    
    // 模拟接口分页
    let list = result?.page || [];
    const total = list.length;
    list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        list,
        total,
    };
};


export const updateDataSource = async (params: IParams, data:any) => {
    const result:any = await request.post<any>('/ds/update',data);    
    // 模拟接口分页
    const code = result?.code;
    // let list = result?.page || [];
    // const total = list.length;
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        code
    };
};