import React, { memo,useEffect } from 'react';
import { Alert, Button, Form, Select } from 'tdesign-react';
import Style from '../index.module.less';
import { EditableCellTable } from '../../EditTable';
import { useAppSelector,useAppDispatch } from 'modules/store';
import {  selectListBase,getGoldTableColumnList } from "modules/goldTable/columns";
// import {  } from "../../../../services/goldtable";



const { FormItem } = Form;
const { Option } = Select;

const message = [
  '1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；',
  '2、开票金额为您实际支付金额；',
  '3、如有疑问请直接联系：13300001111。',
];

const names = [
  {
    label: '合同A',
    value: 'A',
  },
  {
    label: '合同B',
    value: 'B',
  },
  {
    label: '合同C',
    value: 'C',
  },
];

const types = [
  {
    label: '类型A',
    value: 'A',
  },
  {
    label: '类型B',
    value: 'B',
  },
  {
    label: '类型C',
    value: 'C',
  },
];

export default memo((props: { callback: Function , goldTableId: any, goldTableName:string ,goldTableColumnList:[],removeinfo:Function,editInfo:Function}) => {
  const { callback,removeinfo,editInfo } = props;
  const { goldTableId, goldTableName,goldTableColumnList } = props

  const next = () => {
    callback('next');
  };
 
  

  // const pageState = useAppSelector(selectListBase);
  // const dispatch = useAppDispatch();
  // const {goldTableColumnList} = pageState;


  const getCurrentColumnList = (array:any) =>{
    console.log("getCurrentColumnList==>");
    console.log(JSON.stringify)
}

  const deleteColumn = (id:any) => {
    removeinfo(id);
  };

  const editColumn = (data:any) =>{
    editInfo(data)
  }


  const style = {
    marginTop : '10px'
  };


 

  return (
    <>
      {/* <div className={Style.alertBox}>
        <Alert theme='info' message={message} title='发票开具规则：' maxLine={3} close />
      </div> */}
      <EditableCellTable goldTableColumnList={goldTableColumnList} deleteColumn={deleteColumn} getCurrentColumnList={getCurrentColumnList} editColumn={editColumn}/>
      <div style={style}>
          <Button type='submit' onClick={() => next()}>
            Next Step
          </Button>
      </div>
    </>
  );
});
