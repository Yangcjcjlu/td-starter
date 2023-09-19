import { memo, useEffect, useRef } from 'react';
import { Alert, Button, Form, Select } from 'tdesign-react';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import Style from '../index.module.less';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { clearPageState, getAllGoldTableList, selectListBase } from 'modules/goldTable/base';

const { FormItem } = Form;
const { Option } = Select;

export default memo((props: { callback: Function }) => {
  const { callback, data } = props;

  const next = () => {
    callback('next');
  };

  const formRef = useRef<FormInstanceFunctions>();
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListBase);
  const { goldTableList } = pageState;

  useEffect(() => {
    dispatch(getAllGoldTableList());
  }, []);

  return (
    <Form labelWidth={200}>
      <FormItem
        label='Gold Table Name'
        name='goldTableName'
        rules={[{ required: true, message: 'Gold Table Name is Ruqired!', type: 'error' }]}
      >
        <Select
          placeholder='Please select Gold Table'
          onChange={(value) => {
            props.data.goldTableId = value;
          }}
        >
          {goldTableList.map((item) => {
            const { id, goldTable } = item;
            return <Option label={goldTable} value={id} key={id} />;
          })}
        </Select>
      </FormItem>
      <FormItem>
        <Button type='submit' onClick={() => next()}>
          Submit
        </Button>
      </FormItem>
    </Form>
  );
});
