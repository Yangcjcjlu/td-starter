import { getApiHost } from '../configs/api_host';
import request from 'utils/request';

 
export const getGoldList= async (params: any) =>{
    // console.log("getApiHost==>"+getApiHost());
    const host = getApiHost();
    let url = `${host}api/v1/goldTable`
    
    if(params && params.name){
     url += `?tableName=${params.name}`;
    }

    // const result = await request.get<any>(url);    
    // result = await fetch(`${API_HOST}api/v1/statistic/dataSource`);
    //     resp = await result.json();
    // const result = await fetch(url);
    const result = await request.get<any>(url);
    const data = result ? result : null;
    // const resp = await result.json();
    return data;
};



export const getGoldColumnList = async (params: any) => {
    let url = 'api/v1/goldTable/1/columns'
    const result:any = await request.get<any>(url);    
    // 模拟接口分页
    const data = result ? result : null;
    return data;
};