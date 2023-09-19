import classnames from 'classnames';
import { memo, useEffect, useRef } from 'react';
import CommonStyle from 'styles/common.module.less';
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  MessagePlugin,
  Radio,
  Row,
  Select,
  Textarea,
  Upload,
} from 'tdesign-react';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import Style from './index.module.less';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { clearPageState, getAllGoldTableList, selectListBase as selectGoldTableListBase } from 'modules/goldTable/base';
import { getSubscrsList, selectListBase as selectSubscrListBase } from 'modules/subscr/base';
import { getGoldTablesColumns } from 'services/goldtable';

const { FormItem } = Form;
const { Option } = Select;
const { Group } = Avatar;

const INITIAL_DATA = {
  goldTableName: '',
  subscribName: '',
  mapping: [],
};

export default memo(() => {
  const formRef = useRef<FormInstanceFunctions>();
  const dispatch = useAppDispatch();
  const goldTablePageState = useAppSelector(selectGoldTableListBase);
  const { goldTableList } = goldTablePageState;
  const subscrPageState=useAppSelector(selectSubscrListBase);
  const { subscrList } = subscrPageState;

  let columns = [];

  useEffect(() => {
    dispatch(getAllGoldTableList());
    dispatch(getSubscrsList());
  }, []);

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      console.log('form 值', formRef.current?.getFieldsValue?.(true));
      MessagePlugin.info('提交成功');
    }
  };
  const handleGoldTableChanged = (value) => {
    console.log(value);
    getGoldTablesColumns(value).then((r) => {
      columns = r.data;
    });
  };

  return (
    <div className={classnames(CommonStyle.pageWithColor)}>
      <div className={Style.formContainer}>
        <Form ref={formRef} onSubmit={onSubmit} labelWidth={100} labelAlign='top'>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>Distribution Info</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem
                label='Gold Table Name'
                name='goldTableName'
                initialData={INITIAL_DATA.goldTableName}
                rules={[{ required: true, message: 'Gold Table Name is Ruqired!', type: 'error' }]}
              >
                <Select placeholder='Please select Gold Table' onChange={handleGoldTableChanged}>
                  {goldTableList.map((item) => {
                    const { id, goldTable } = item;
                    return <Option label={goldTable} value={goldTable} key={goldTable} />;
                  })}
                </Select>
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='Subscrib Name'
                name='subscribName'
                initialData={INITIAL_DATA.subscribName}
                rules={[{ required: true, message: 'Subscrib Name is Ruqired!', type: 'error' }]}
              >
                <Select placeholder='Please select Subscrib'>
                  {subscrList.map((item) => {
                    const { subscrName } = item;
                    return <Option label={subscrName} value={subscrName} key={subscrName} />;
                  })}
                </Select>
              </FormItem>
            </Col>

          </Row>

          <div className={Style.titleBox}>
            <div className={Style.titleText}></div>
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
});
