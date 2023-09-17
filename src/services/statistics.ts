import request from 'utils/request';





interface IPieData {
    name: string,
    value: string
}

export interface IPieResult {
    /**
     *  { "value": 1048, "name": "DEH" },
        { "value": 735, "name": "ESM" },
        { "value": 580, "name": "ORS" },
        { "value": 484, "name": "MCH" },
        { "value": 300, "name": "TXR" }
     */
    data: IPieData[];
}

interface ILineData{
    // {
    //     "name": "Video Ads",
    //     "data": [150, 232, 201, 154, 190, 330, 410]
    //   },
    name: string;
    data: number[];
}

interface ISource{
    name: string
}

export interface ILineChartResult {
    // ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
    sourceList: ISource[];
    // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    xDataList:string[];
    data: ILineData[];

}


export const getPieChartInfo = async (params: any) => {
    const result = await request.post<IPieResult>('api/get-card-list');
    const list = result?.data || [];
    return {
        list,
    };
};

export const getLineChartInfo = async (params: any) => {
    const result = await request.post<ILineChartResult>('api/get-line-list',params);
    const list = result?.data || [];
    return {
        list,
    };
};