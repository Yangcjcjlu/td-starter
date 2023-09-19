import classnames from 'classnames';
import { getDataItem, getItem } from 'modules/datasource/get';
import { updateItem } from 'modules/datasource/update';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { memo, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  MessagePlugin,
  Row,
  Select
} from 'tdesign-react';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import Style from './index.module.less';

const { FormItem } = Form;
const { Option } = Select;
const { Group } = Avatar;

const INITIAL_DATA = {
  name: '',
  type: '',
  host: '',
  username: '',
};

export const GoldForm =() => {
  const formRef = useRef<FormInstanceFunctions>();
  const pageState = useAppSelector(getDataItem);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  // const pageState = useAppSelector(selectBase);


  const { item } = pageState;

  // useEffect(() => {
  //   dispatch(
  //     getItem({
  //       id: id
  //     }),
  //   );
  //   return () => {
  //     console.log('clear');
  //     // dispatch(clearPageState());
  //   };
  // }, []);

  formRef.current?.setFieldsValue(
    {
    // name: item.name,
    // type: item.type,
    // host: item.host,
    // username: item.username
    name: 'test',
    type: 'type',
    host: 'host',
    username: 'userName'
    })
  
    const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      // console.log('form 值', formRef.current?.getFieldsValue?.(true));
      let data = formRef.current?.getFieldsValue?.(true)
      data["id"] = id;
      dispatch(updateItem(data));

      MessagePlugin.info('提交成功');
    }
  };

  return (
    <div className={classnames(CommonStyle.pageWithColor)}>
      <div className={Style.formContainer}>
        <Form ref={formRef} onSubmit={onSubmit} labelWidth={100} labelAlign='top'>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>dataSource Info</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem
                label='name'
                name='name'
                initialData={INITIAL_DATA.name}
                // value={item.name}
                // rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='Please input item' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='type'
                name='type'
                initialData={INITIAL_DATA.type}
                // rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='Please input item' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='host'
                name='host'
                initialData={INITIAL_DATA.host}
                // rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='Please input item' />
              </FormItem>
            </Col>

           

            <Col span={6}>
              <FormItem label='username' name='username' initialData={INITIAL_DATA.partyA} rules={[{ required: true }]}>
              <Input placeholder='Please input item' />
              </FormItem>
            </Col>
          </Row>

          <div className={Style.titleBox}>
            <div className={Style.titleText}>other info</div>
          </div>
          <FormItem>
            <Button type='submit' theme='primary'>
              submit
            </Button>
            <Button type='reset' style={{ marginLeft: 12 }}>
              reset
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}


