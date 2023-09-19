import { memo, useEffect, useRef, useState } from 'react';
import { Button, Form, Table, Select, Input } from 'tdesign-react';
import { MinusCircleIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import { clearPageState, getGoldTableColumnList, selectListBase } from 'modules/goldTable/columns';

const { FormItem, FormList } = Form;

export default memo((props: { current: number; callback: Function; steps: any[]; data: any }) => {
  const { data, current, callback, steps = [] } = props;
  const goldTableId = data.goldTableId;
  const mappingList = data.mappingList;
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
      // title: 'multiple',
      // align: 'center',
      colKey: 'row-select',
      type: 'multiple',

      width: 150,
    },
    { colKey: 'goldColumn', title: 'Gold Column' },
    // { colKey: 'columnType', title: 'Gold Type' },
    {
      colKey: 'subscrName',
      title: 'Subscr Name',
      edit: {
        component: Input,
        // props:{
        //   value:
        // }
        onEdited: (context) => {
          mappingList.splice(context.rowIndex, 1, context.newRowData);
          console.log('Edit Subscr Name:', context);
        },
        rules: [
          { required: true, message: '不能为空' },
          { max: 10, message: '字符数量不能超过 10', type: 'warning' },
        ],
      },
      defaultEditable: true,
    },
    // { colKey: 'subscrType', title: 'Subscr Type' },
  ];

  function onSelectChange(value, { selectedRowData }) {
    console.log(value, selectedRowData);
    setSelectedRowKeys(value);
  }

  const editableCellState = (cellParams) => {
    return cellParams.colIndex !== 1;
  };

  return (
    <Form labelWidth={100}>
      <Table
        rowKey='id'
        data={goldTableColumnList}
        columns={columns}
        selectOnRowClick={true}
        selectedRowKeys={selectedRowKeys}
        onSelectChange={onSelectChange}
        editableCellState={editableCellState}
      />
      <div />

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
