import classnames from 'classnames';
import dayjs from 'dayjs';
import React, { memo, useMemo, useRef, useState,useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/store';

import { Button, Input, Link, MessagePlugin, Select, Table } from 'tdesign-react';
import CommonStyle from '../../../styles/common.module.less';
import {  selectListBase,getGoldTableColumnList,setColumnData } from "modules/goldTable/columns";
import './index.module.less';

export const  EditableCellTable = (props:any) => {

  const {deleteColumn} = props;
  const dispatch = useAppDispatch();
  
  const tableRef = useRef(null);
  const initData = new Array(5).fill(null).map((_, i) => ({
    id: String(i + 1),
    goldTable: ['table1', 'table2', 'table3'][i % 3],
    status: i % 3,
    goldColumn: [
      'column1',
      'column2',
      'column3',
      'column4',
      'column5',
    ][i % 4],
    letters: [
      ['宣传物料制作费用'],
      ['宣传物料制作费用'],
      ['宣传物料制作费用'],
      ['宣传物料制作费用', 'algolia 服务报销'],
    ][i % 4],
    createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
  }));
  const STATUS_OPTIONS = [
    { label: '审批通过', value: 0 },
    { label: '审批过期', value: 1 },
    { label: '审批失败', value: 2 },
  ];

  const [data, setData] = useState([...initData]);
  const [relationSelect, setRelationSelect] = useState({});
  const { goldTableColumnList } = props;
  useEffect(()=>{
    setData(goldTableColumnList.data || [...initData] );
    // console.log([...initData])
    // setData(goldTableColumnList.data)
  },[goldTableColumnList])

  const editableCellState = (cellParams:any) => {
    return cellParams.index !== 2;
  }


  const onEdit = (e) => {
    const { id } = e.currentTarget.dataset;
    // if (!editableRowKeys.includes(id)) {
    //   setEditableRowKeys(editableRowKeys.concat(id));
    // }
  };

  const onDelete = (e) => {
    console.log(e)
    const { id } = e.currentTarget.dataset;
    deleteColumn(id)
  }
   

  const onCancel = (e) => {
    const { id } = e.currentTarget.dataset;
    // updateEditState(id);
    // tableRef.current.clearValidateData();
  };

  const onSave = (e) => {
    const { id } = e.currentTarget.dataset;
    // currentSaveId = id;
    // 触发内部校验，可异步接收校验结果，也可在 onRowValidate 中接收异步校验结果
    // tableRef.current.validateRowData(id).then((params) => {
    //   console.log('Promise Row Validate:', params);
    //   if (params.result.length) {
    //     const r = params.result[0];
    //     MessagePlugin.error(`${r.col.title} ${r.errorList[0].message}`);
    //     return;
    //   }
    //   // 如果是 table 的父组件主动触发校验
    //   if (params.trigger === 'parent' && !params.result.length) {
    //     const current = editMap[currentSaveId];
    //     // 单行数据校验：校验通过再保存数据
    //     if (current) {
    //       data.splice(current.rowIndex, 1, current.editedRow);
    //       setData([...data]);
    //       MessagePlugin.success('保存成功');
    //     }
    //     updateEditState(currentSaveId);
    //   }
    // });
  };


  const columns = useMemo(
    () => [
      {
        title: 'Table name',
        colKey: 'goldTable',
        align: 'left',
        // 编辑状态相关配置，全部集中在 edit
        edit: {
          // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
          // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
          component: Input,
          // props, 透传全部属性到 Input 组件
          props: {
            clearable: true,
            autofocus: true,
          },
          // 触发校验的时机（when to validate)
          validateTrigger: 'change',
          // 透传给 component: Input 的事件（也可以在 edit.props 中添加）
          on: (editContext) => ({
            onBlur: () => {
              console.log('失去焦点', editContext);
            },
            onEnter: (ctx) => {
              ctx?.e?.preventDefault();
              console.log('onEnter', ctx);
            },
          }),
          // 除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态
          abortEditOnEvent: ['onEnter'],
          // 编辑完成，退出编辑态后触发
          onEdited: (context) => {
            data.splice(context.rowIndex, 1, context.newRowData);
            setData([...data]);
            console.log('Edit firstName:', context);
            MessagePlugin.success('Success');
          },
          // 校验规则，此处同 Form 表单
          rules: [
            { required: true, message: '不能为空' },
            { max: 10, message: '字符数量不能超过 10', type: 'warning' },
          ],
        },
        // 默认是否为编辑状态
        defaultEditable: true,
      },
      {
        title: 'column name',
        colKey: 'goldColumn',
        align: 'left',
        // 编辑状态相关配置，全部集中在 edit
        edit: {
          // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
          // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
          component: Input,
          // props, 透传全部属性到 Input 组件
          props: {
            clearable: true,
            autofocus: true,
          },
          // 触发校验的时机（when to validate)
          validateTrigger: 'change',
          // 透传给 component: Input 的事件（也可以在 edit.props 中添加）
          on: (editContext) => ({
            onBlur: () => {
              console.log('失去焦点', editContext);
            },
            onEnter: (ctx) => {
              ctx?.e?.preventDefault();
              console.log('onEnter', ctx);
            },
          }),
          // 除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态
          abortEditOnEvent: ['onEnter'],
          // 编辑完成，退出编辑态后触发
          onEdited: (context) => {
            data.splice(context.rowIndex, 1, context.newRowData);
            setData([...data]);
            console.log('Edit firstName:', context);
            MessagePlugin.success('Success');
          },
          // 校验规则，此处同 Form 表单
          rules: [
            { required: true, message: '不能为空' },
            { max: 10, message: '字符数量不能超过 10', type: 'warning' },
          ],
        },
        // 默认是否为编辑状态
        defaultEditable: false,
      },
      {
        title: 'distribution name',
        colKey: 'distributionName',
        // cell: ({ row }) => row?.distributionName?.join('、'),
        width: 280,
        edit: {
          // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
          // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
          component: Input,
          // props, 透传全部属性到 Input 组件
          props: {
            clearable: true,
            autofocus: true,
          },
          // 触发校验的时机（when to validate)
          validateTrigger: 'change',
          // 透传给 component: Input 的事件（也可以在 edit.props 中添加）
          on: (editContext) => ({
            onBlur: () => {
              console.log('失去焦点', editContext);
            },
            onEnter: (ctx) => {
              ctx?.e?.preventDefault();
              console.log('onEnter', ctx);
            },
          }),
          // 除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态
          abortEditOnEvent: ['onEnter'],
          // 编辑完成，退出编辑态后触发
          onEdited: (context) => {
            console.log("context==>"+context);
            console.log("data=>"+JSON.stringify(data))
            dispatch(setColumnData(data))
            // data.splice(context.rowIndex, 1, context.newRowData);
            setData([...data]);
            console.log('Edit firstName:', context);
            MessagePlugin.success('Success');
          },
          // 校验规则，此处同 Form 表单
          rules: [
            { required: true, message: '不能为空' },
            { max: 10, message: '字符数量不能超过 10', type: 'warning' },
          ],
        },
        // 默认是否为编辑状态
        defaultEditable: true,
      },
      {
        title: 'Operation',
        colKey: 'operate',
        cell: ({ row }) => {
          const editable = false;
          // editableRowKeys.includes(row.key);
          return (
            <div className='table-operations'>
              {/* {!editable && ( */}
              <div>
                <Link theme='primary' hover='color' data-id={row.id} onClick={onDelete}>
                  delete
                </Link>
              </div>
              {/* )} */}
              {/* {editable && ( */}
              {/* <div>
                <Link theme='primary' hover='color' data-id={row.key} onClick={onSave}>
                  save
                </Link>
                </div> */}
               
              {/* )} */}
              {/* {editable && ( */}
                {/* <Link theme='primary' hover='color' data-id={row.key} onClick={onCancel}>
                  cancel
                </Link> */}
              {/* )} */}
            </div>
          );
        },
      },
    ],
    [data, relationSelect],
  );

  // 当前示例包含：输入框、单选、多选、日期 等场景
  return <Table rowKey='key' columns={columns} data={data} editableCellState={editableCellState} bordered lazyLoad />;
}

const editableCellTable: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <EditableCellTable/>
    
    </div>
    
    
  
 
);

export default memo(editableCellTable);


