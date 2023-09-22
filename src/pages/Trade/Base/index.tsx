import classnames from 'classnames';
import { ETrend, TrendIcon } from 'components/Board';
import { clearPageState, getList, selectTradeList } from 'modules/trade/base';
import { useAppDispatch, useAppSelector } from 'modules/store';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Button, Col, Input, Row, Table, Tag } from 'tdesign-react';
import { getTradeList } from '../../../services/trade';
import { debounce } from '../../../services/debounce';
import style from './index.module.less';

export default memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectTradeList);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  const { loading, list, current, pageSize, total } = pageState;

  const nav = useNavigate();

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      dispatch(clearPageState());
    };
  }, []);

  function handleManage(record: any) {
    const { row } = record;
    const id = row.id ? row.id : 0;
    nav(`/datasource/${id}/form`);
  }

  function showDetails(record: any) {
    const { row } = record;
    const id = row.id ? row.id : 0;
    nav(`/datasource/${id}/details`);
  }

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
            placeholder='Please Search Traction Id'
            onEnter={(value: any) => {
              dispatch(
                getList({
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
            colKey: 'ingestedSource',
            title: 'Ingested Source',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'sourceElementName',
            title: 'Source Element Name',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'description',
            title: 'Description' ,
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'goldTable',
            title: 'Gold Table',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'goldElementName',
            title: 'Gold Element Name',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'distributionName',
            title: 'Distribution Name',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'distributionElementName',
            title: 'Disbribution Element Name',
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
        // pagination={{
        //   pageSize,
        //   total,
        //   current,
        //   showJumper: true,
        //   onCurrentChange(current, pageInfo) {
        //     dispatch(
        //       getList({
        //         pageSize: pageInfo.pageSize,
        //         current: pageInfo.current,
        //       }),
        //     );
        //   },
        //   onPageSizeChange(size) {
        //     dispatch(
        //       getList({
        //         pageSize: size,
        //         current: 1,
        //       }),
        //     );
        //   },
        // }}
      />
    </div>
  );
});
