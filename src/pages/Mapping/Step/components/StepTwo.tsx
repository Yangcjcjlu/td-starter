import React, { memo } from 'react';
import { Button, Form, Input, MessagePlugin, Select } from 'tdesign-react';

const { FormItem } = Form;

export default memo((props: { current: number; callback: Function; steps: any[] }) => {
  const { current, callback, steps = [] } = props;

  const { Option } = Select;


  const next = () => {
    // callback('next');
    MessagePlugin.success('Success');
  };

  const prev = () => {
    callback('back');
  };

  return (
    <Form labelWidth={100}>
      {/* <FormItem label='发票抬头' name='invoice' rules={[{ required: true, message: '请输入发票抬头', type: 'error' }]}>
        <Input placeholder='请输入发票抬头' />
      </FormItem>

      <FormItem
        label='纳税人识别号'
        name='taxpayerId'
        rules={[{ required: true, message: '请输入纳税人识别号', type: 'error' }]}
      >
        <Input placeholder='请输入纳税人识别号' />
      </FormItem> */}

      <FormItem  label='Distribution Name' name='distributionName'>
        <Input style= {{  marginLeft:20 }} placeholder='Please Enter' />
      </FormItem>

      <FormItem label='Distribution Type' name='distributionType'>
      <Select style= {{  marginLeft:20 }} value='A' placeholder='please select distribution type'>
            <Option key='A' label='CSV' value='A' />
            <Option key='B' label='EXCEL' value='B' />
            <Option key='C' label='公司C' value='C' />
        </Select>
      </FormItem>
{/* 
      <FormItem label='银行账号' name='bankCount'>
        <Input placeholder='请输入银行账号' />
      </FormItem>

      <FormItem label='通知邮箱' name='email'>
        <Input placeholder='请输入通知邮箱' />
      </FormItem>

      <FormItem label='通知手机' name='phone'>
        <Input placeholder='请输入通知手机' />
      </FormItem> */}

      <FormItem>
        {/* {current < steps.length - 1 && ( */}
          <Button type='submit' onClick={() => next()}>
            Submit
          </Button>
        {/* )} */}

        {/* {current > 0 && ( */}
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Go back
          </Button>
        {/* )} */}
      </FormItem>
    </Form>
  );
});
