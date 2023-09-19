import request from 'utils/request';
import proxy from '../configs/host';




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
    const env = import.meta.env.MODE || 'development';
    const API_HOST = proxy[env].API;
    let result = null;
    let resp = null;
    try{
        // result = await request.get<any>('api/v1/statistic/dataSource');
        console.log(proxy[env].API)
        result = await fetch(`${API_HOST}api/v1/statistic/dataSource`);
        resp = await result.json();
    }catch(error){
        console.log("getPieChartInfo error!",error);
        throw error;
    }
    const list = resp;
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