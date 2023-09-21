import React, { memo, useRef } from 'react';
import { Button, Form, Input, MessagePlugin, Select } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
// import { updateItem } from '../../modules/mappi'
// import { updateMappingInfo } from '../../modules/mapping/update'
import { updateMappingInfo,updateItem } from 'modules/mapping/update';


const { FormItem } = Form;

export default memo((props: { current: number; callback: Function; steps: any[], goldTableName:string,goldTableId:any,submitInfo:Function }) => {
  const { current, callback, steps = [],goldTableName,goldTableId ,submitInfo} = props;
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(updateMappingInfo);


  const formRef = useRef<FormInstanceFunctions>();
  const { Option } = Select;


  const next = () => {
    const data = formRef.current?.getFieldsValue?.(true)
    submitInfo(data)
  };

  const prev = () => {
    callback('back');
  };

  return (
    <Form ref={formRef} labelWidth={100}>
      
      <FormItem  label='Distribution Name' name='subscr' >
        <div style={{width:300}}>
        <Input style= {{ marginLeft:25 }} placeholder='Please Enter' />
        </div>
      </FormItem>

      <FormItem label='Distribution Type' name='distributionType'>
      <div style={{width:300}}>
      <Select style= {{  marginLeft:25 }} value='CSV' placeholder='please select distribution type'>
            <Option key='CSV' label='CSV' value='CSV' />
            <Option key='EXCEL' label='EXCEL' value='EXCEL' />
            <Option key='PDF' label='PDF' value='PDF' />
        </Select>
        </div>
      </FormItem>

      <FormItem>
        <div style={{marginTop: '20px'}}>
          <Button type='submit' onClick={() => next()}>
            Submit
          </Button>

          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Go back
          </Button>
          </div>
      </FormItem>
    </Form>
  );
});
