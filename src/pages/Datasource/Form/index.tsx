import classnames from 'classnames';
import { getItem, selectBase } from 'modules/datasource/get';
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
  Select,
  Textarea
} from 'tdesign-react';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import Style from './index.module.less';


const { FormItem } = Form;
const { Option } = Select;
const { Group } = Avatar;

const INITIAL_DATA = {
  name: '',
  type: '',
  payment: '',
  partyA: '',
  partyB: '',
  signDate: '',
  effectiveDate: '',
  endDate: '',
  remark: '',
  notary: '',
  file: [],
};

export default memo(() => {
  const formRef = useRef<FormInstanceFunctions>();
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const pageState = useAppSelector(selectBase);

  const { datasourceList } = pageState;

  // console.log("datasourceList==>"+JSON.stringify(datasourceList));
  // const { loading, contractList, current, pageSize, total } = pageState;

  // useEffect(() => {
  //   dispatch(
  //     getList({
  //       pageSize: pageState.pageSize,
  //       current: pageState.current,
  //     }),
  //   );
  //   return () => {
  //     console.log('clear');
  //     dispatch(clearPageState());
  //   };
  // }, []);

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {    
      console.log('form 值', formRef.current?.getFieldsValue?.(true));
      MessagePlugin.info('提交成功');
    }
  };

  const handleFail = ({ file }: { file: any }) => {
    console.error(`文件 ${file.name} 上传失败`);
  };

  // const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  // const { loading, datasourceList, current, pageSize, total } = pageState;
 
  useEffect(() => {
    dispatch(
      getItem({
        pageSize: 0,
        current: 0,
      }),
    );
    return () => {
      // console.log('clear');
      // dispatch(clearPageState());
    };
  }, []);

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
                // value={datasourceList[0].name}
                // rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='Please input item' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='type'
                name='type'
                initialData={INITIAL_DATA.name}
                // rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='Please input item' />
              </FormItem>
            </Col>

            {/* <Col span={6}>
              <FormItem
                label='合同类型'
                name='type'
                initialData={INITIAL_DATA.type}
                rules={[{ required: true, message: '合同类型必填', type: 'error' }]}
              >
                <Select placeholder='请选择类型'>
                  <Option key='A' label='类型A' value='A' />
                  <Option key='B' label='类型B' value='B' />
                  <Option key='C' label='类型C' value='C' />
                </Select>
              </FormItem>
            </Col> */}

            {/* <Col span={12}>
              <FormItem
                label='合同收付类型'
                name='payment'
                initialData={INITIAL_DATA.payment}
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value='0'>收款</Radio>
                  <Radio value='1'>付款</Radio>
                </Radio.Group>
                <Input placeholder='请输入金额' style={{ width: 160 }} />
              </FormItem>
            </Col> */}

            <Col span={6}>
              <FormItem label='username' name='username' initialData={INITIAL_DATA.partyA} rules={[{ required: true }]}>
              <Input placeholder='Please input item' />
              </FormItem>
            </Col>

            {/* <Col span={6}>
              <FormItem label='乙方' name='partyB' initialData={INITIAL_DATA.partyB} rules={[{ required: true }]}>
                <Select value='A' placeholder='请选择类型'>
                  <Option key='A' label='公司A' value='A' />
                  <Option key='B' label='公司B' value='B' />
                  <Option key='C' label='公司C' value='C' />
                </Select>
              </FormItem>
            </Col> */}

            {/* <Col span={6} className={Style.dateCol}>
              <FormItem
                label='合同签订日期'
                name='signDate'
                initialData={INITIAL_DATA.signDate}
                rules={[{ required: true }]}
              >
                <DatePicker mode='date' />
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol}>
              <FormItem
                label='合同生效日期'
                name='effectiveDate'
                initialData={INITIAL_DATA.effectiveDate}
                rules={[{ required: true }]}
              >
                <DatePicker mode='date' />
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol}>
              <FormItem
                label='合同结束日期'
                name='endDate'
                initialData={INITIAL_DATA.endDate}
                rules={[{ required: true }]}
              >
                <DatePicker mode='date' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem label='合同文件' name='file' initialData={INITIAL_DATA.file}>
                <Upload
                  onFail={handleFail}
                  tips='请上传pdf文件，大小在60M以内'
                  action='//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo'
                />
              </FormItem>
            </Col> */}
          </Row>

          <div className={Style.titleBox}>
            <div className={Style.titleText}>other info</div>
          </div>

          <FormItem label='备注' name='remark' initialData={INITIAL_DATA.remark}>
            <Textarea placeholder='请输入备注' />
          </FormItem>

          <FormItem label='公证人' name='notary' initialData={INITIAL_DATA.notary}>
            <Group>
              <Avatar>D</Avatar>
              <Avatar>S</Avatar>
              <Avatar>+</Avatar>
            </Group>
          </FormItem>

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
});
