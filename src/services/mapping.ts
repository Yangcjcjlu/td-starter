import request from 'utils/request';

export interface IMappingTopic {
    id: number;
    topic: string;
    sourceColumn: string;
    targetColumn: string;
    createdTime: Date;
    updatedTime: Date
}

interface IResult {
    list: IMappingTopic[];
}

interface IParams {
    pageSize: number;
    current: number;
}

const apiPath='topic'

export const getAllMappingTopics = async (params: IParams) => {
    const result = await request.get<any>(`/${apiPath}`);

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

export const getMappingRulesWithTopic = async (topicName: string) => {
    const result = await request.get<any>(`/${apiPath}/${topicName}`);
    // 模拟接口分页
    const list = result?.page || [];
    const total = list.length;
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        list,
        total,
    };
}

export const getMappingList = async (params: any) => {
    const result = await request.get<any>('/mapping/list', params);
    // 模拟接口分页
    let list = result?.page || [];
    const total = list.length;
    list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        list,
        total,
    };
};

export const updateMapping = async (data: any) => {
    const result: any = await request.post<any>('/api/v1/subscr/saveSubGoldMapping', data);
    // 模拟接口分页
    const code = result?.code;
    // let list = result?.page || [];
    // const total = list.length;
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        code
    };
};
