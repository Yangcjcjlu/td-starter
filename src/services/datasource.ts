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
    
    // 模拟接口分页
    const list = result?.page || [];
    const total = list.length;
    const data = list[0];
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        data,
        total,
    };
};

export const getDataSourceList = async (params: IParams) => {
    const result = await request.get<any>('/ds/list');    
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
    console.log("updateDataSource")
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