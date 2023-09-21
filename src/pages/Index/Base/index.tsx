import classnames from 'classnames';
import { ETrend, TrendIcon } from 'components/Board';
import { getIndexTableBaseList,listIndex ,clearPageState} from 'modules/indexTable/base';
import { useAppDispatch, useAppSelector } from 'modules/store';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Button, Col, Input, Row, Table, Tag } from 'tdesign-react';
import { debounce } from '../../../services/debounce';
import style from './index.module.less';

export default memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(listIndex);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  const { loading, list, current, pageSize, total } = pageState;



  const nav = useNavigate();

  useEffect(() => {
    dispatch(
      getIndexTableBaseList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      dispatch(clearPageState());
    };
  }, []);

  // function handleManage(record: any) {
  //   const { row } = record;
  //   const id = row.id ? row.id : 0;
  //   nav(`/datasource/${id}/form`);
  // }

  // function showDetails(record: any) {
  //   const { row } = record;
  //   const id = row.id ? row.id : 0;
  //   nav(`/datasource/${id}/details`);
  // }

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }
  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor, CommonStyle.pageWithSize)}>
      <Row justify='space-between' className={style.toolBar}>
        {/* <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Button>新建合同</Button>
            </Col>
            <Col>
              <Button theme='default'>导出合同</Button>
            </Col>
            <Col>
              <div>已选 {selectedRowKeys?.length || 0} 项</div>
            </Col>
          </Row>
        </Col> */}
        <Col>
          <Input
            suffixIcon={<SearchIcon />}
            placeholder='Please type Index name.'
            onEnter={(value: any) => {
              dispatch(
                getIndexTableBaseList({
                  pageSize: pageState.pageSize,
                  current: pageState.current,
                  name: value,
                }),
              );
            }}
            autoWidth
          />
        </Col>
      </Row>

      <Table
        columns={[
          // {
          //   colKey: 'row-select',
          //   fixed: 'left',
          //   type: 'multiple',
          // },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'adjClose',
            title: 'AdjClose',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'date',
            title: 'Date',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'close',
            title: 'close',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'high',
            title: 'high',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'index',
            title: 'index',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'low',
            title: 'low',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'volume',
            title: 'volume',
          },
         
          // {
          //   align: 'left',
          //   fixed: 'right',
          //   width: 180,
          //   colKey: 'op',
          //   title: 'operation',
          //   cell(record: any) {
          //     return (
          //       <>
          //         <Button
          //           theme='primary'
          //           variant='text'
          //           onClick={() => {
          //             return handleManage(record);
          //           }}
          //         >
          //           manage
          //         </Button>
          //         <Button theme='primary' variant='text' onClick={() => showDetails(record)}>
          //           details
          //         </Button>
          //         <Button
          //           theme='primary'
          //           variant='text'
          //           onClick={() => {
          //             // handleClickDelete(record);
          //           }}
          //         >
          //           delete
          //         </Button>
          //       </>
          //     );
          //   },
          // },
        ]}
        loading={loading}
        data={list}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        verticalAlign='top'
        hover
        onSelectChange={onSelectChange}
        pagination={{
          pageSize,
          total,
          current,
          showJumper: true,
          onCurrentChange(current, pageInfo) {
            dispatch(
              getIndexTableBaseList({
                pageSize: pageInfo.pageSize,
                current: pageInfo.current,
              }),
            );
          },
          onPageSizeChange(size) {
            dispatch(
              getIndexTableBaseList({
                pageSize: size,
                current: 1,
              }),
            );
          },
        }}
      />
    </div>
  );
});
