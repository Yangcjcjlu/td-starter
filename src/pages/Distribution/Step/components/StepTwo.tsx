import { memo, useEffect, useRef, useState } from 'react';
import { Button, Form, Table, Select } from 'tdesign-react';
import { MinusCircleIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import { clearPageState, getGoldTableColumnList, selectListBase } from 'modules/goldTable/columns';

const { FormItem, FormList } = Form;

export default memo((props: { current: number; callback: Function; steps: any[] }) => {
  const { data, current, callback, steps = [] } = props;
  const goldTableId = data.goldTableId;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const next = () => {
    callback('next');
  };

  const prev = () => {
    data.mappingList = [];
    callback('back');
  };

  const formRef = useRef<FormInstanceFunctions>();
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListBase);
  const { goldTableColumnList } = pageState;

  useEffect(() => {
    dispatch(getGoldTableColumnList(goldTableId));
  }, []);

  const columns = [
    {
      // title: '单选',
      // align: 'center',
      colKey: 'row-select',
      type: 'single',
      // 允许单选(Radio)取消行选中
      checkProps: { allowUncheck: true },

      width: 50,
    },
    { colKey: 'goldColumn', title: 'Gold Column', width: '100'},
    { colKey: 'channel', title: '签署方式', width: '120'  },
    { colKey: 'detail.email', title: '邮箱地址', ellipsis: true },
    { colKey: 'createTime', title: '申请时间' },
  ];

  
  function onSelectChange(value, { selectedRowData }) {
    console.log(value, selectedRowData);
    setSelectedRowKeys(value);
  }

  return (
    <Form labelWidth={100}>
      <Table
        rowKey='id'
        data={goldTableColumnList}
        columns={columns}
        selectOnRowClick={true}
        selectedRowKeys={selectedRowKeys}
        onSelectChange={onSelectChange}
      />

      <FormItem>
        {current < steps.length - 1 && (
          <Button type='submit' onClick={() => next()}>
            Next
          </Button>
        )}

        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Prev
          </Button>
        )}
      </FormItem>
    </Form>
  );
});
