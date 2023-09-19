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
    const result = await fetch(url);
    const resp = await result.json();
    console.log('gold LIST resp==>');
    console.log(resp);
    // 模拟接口分页
    // // let list = result?.page || [];
    // // const total = list.length;
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
   return resp;
};

export const getGoldColumnList = async (params: any, data:any) => {
    let url = 'api/v1/goldTable/1/columns'
    const result:any = await request.get<any>('/ds/update',data);    
    // 模拟接口分页
    const code = result?.code;
    // let list = result?.page || [];
    // const total = list.length;
    // list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
    return {
        code
    };
};