import request from 'utils/request';

export interface IGoldTable {
    id: number;
    goldTable: string;
    description: string;
}

export interface IGoldTableColumn {
    id: number;
    goldTable: string;
    goldColumn: string;
    columnType: string;
}

interface IResult {
    list: IGoldTable[];
}

interface IParams {
    pageSize: number;
    current: number;
}


const basePath = '/api/v1'

export const getAllGoldTable = async () => {
    const result = await request.get<any>(`${basePath}/goldTable`);
    const data = result ? result : null;
    return data;
}

export const getGoldTablesColumns = async (id: number) => {
    const result = await request.get<any>(`${basePath}/goldTable/${id}/columns`);
    const data = result ? result : null;
    return { data };
}