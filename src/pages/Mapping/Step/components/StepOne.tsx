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

export default memo((props: { callback: Function , goldTableId: any }) => {
  const { callback } = props;
  const { goldTableId } = props

  const next = () => {
    callback('next');
  };
 
  

  const pageState = useAppSelector(selectListBase);
  const dispatch = useAppDispatch();
  const {goldTableColumnList} = pageState;


  const deleteColumn = (id:any) => {
    // console.log(id)
    
    // let index = -1;
    // const array:Array<any> = goldTableColumnList.data;
    // let newArray =[];

    // for(let i =0;i < array.length; i++){
    //   const arrayId = array[i].id +'';
    //   if( arrayId === id){
    //     index = i;
    //     continue;
    //   }
    //   newArray.push(array[i]);
    // }

    // if(index >=0){
    //   pageState.set
    //   goldTableColumnList.data = newArray;
    // }
    // console.log(goldTableColumnList)
    // goldTableColumnList.filter(e-> )
  };

  useEffect(()=>{
    console.log("goldTableId==>");
    console.log(goldTableId);
    dispatch(
      getGoldTableColumnList(
        goldTableId
      ),
    );
    return () => {
      // dispatch(clearPageState());
    };
  },[goldTableId])


  const style = {
    marginTop : '10px'
  };


 

  return (
    <>
      {/* <div className={Style.alertBox}>
        <Alert theme='info' message={message} title='发票开具规则：' maxLine={3} close />
      </div> */}
      <EditableCellTable goldTableColumnList={goldTableColumnList} deleteColumn={deleteColumn}/>
      <div style={style}>
          <Button type='submit' onClick={() => next()}>
            Next Step
          </Button>
      </div>
      {/* <Form labelWidth={100}>
        <FormItem label='合同名称' name='name' rules={[{ required: true, message: '请选择合同名称', type: 'error' }]}>
          <Select value='A' placeholder='请选择合同'>
            {names.map((item) => {
              const { label, value } = item;
              return <Option label={label} value={value} key={value} />;
            })}
          </Select>
        </FormItem>

        <FormItem label='发票类型' name='type' rules={[{ required: true, message: '请选择发票类型', type: 'error' }]}>
          <Select value='A' placeholder='请选择发票类型'>
            {types.map((item) => {
              const { label, value } = item;
              return <Option label={label} value={value} key={value} />;
            })}
          </Select>
        </FormItem>

        <FormItem label='开票金额' name='name'>
          <div>--</div>
        </FormItem>
        <FormItem>
          <Button type='submit' onClick={() => next()}>
            提交申请
          </Button>
        </FormItem>
      </Form> */}
    </>
  );
});
