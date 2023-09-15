import classnames from 'classnames';
import { ETrend, TrendIcon } from 'components/Board';
import { clearPageState, getList, selectListBase } from 'modules/datasource/base';
import { useAppDispatch, useAppSelector } from 'modules/store';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Button, Col, Input, Row, Table, Tag } from 'tdesign-react';
import style from './index.module.less';



export const PaymentTypeMap: {
  [key: number]: React.ReactElement;
} = {
  0: <TrendIcon trend={ETrend.down} trendNum='付款' />,
  1: <TrendIcon trend={ETrend.up} trendNum='收款' />,
};

export const StatusMap: {
  [key: number]: React.ReactElement;
} = {
  1: (
    <Tag theme='warning' variant='light'>
      待审核
    </Tag>
  ),
  2: (
    <Tag theme='warning' variant='light'>
      待履行
    </Tag>
  ),
  3: (
    <Tag theme='success' variant='light'>
      履行中
    </Tag>
  ),
  4: (
    <Tag theme='success' variant='light'>
      已完成
    </Tag>
  ),
  5: (
    <Tag theme='danger' variant='light'>
      审核失败
    </Tag>
  ),
};

export const ContractTypeMap: {
  [key: number]: string;
} = {
  0: '审核失败',
  1: '待审核',
  2: '待履行',
};

export default memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListBase);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  const { loading, datasourceList, current, pageSize, total } = pageState;


  const nav = useNavigate();
  

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      console.log('clear');
      dispatch(clearPageState());
    };
  }, []);

  function handleManage(record: any)  {
    const { row } = record;
    const id = row.id ? row.id : 0;
    nav(`/datasource/${id}/form`);
  }

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }
  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
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
          <Input suffixIcon={<SearchIcon />} placeholder='请输入你需要搜索的型号' />
        </Col>
      </Row>

      <Table
        columns={[
          {
            colKey: 'row-select',
            fixed: 'left',
            type: 'multiple',
            // width: 50,
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'name',
            title: 'name',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'host',
            title: 'host',
            // cell({ row }) {
            //   return StatusMap[row.status || 5];
            // },
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'port',
            title: 'port',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'username',
            title: 'username',
            // cell({ row }) {
            //   return ContractTypeMap[row.contractType];
            // },
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'bucketName',
            title: 'bucketName',
            // cell({ row }) {
            //   return PaymentTypeMap[row.paymentType];
            // },
          },
          {
            align: 'left',
            fixed: 'right',
            width: 180,
            colKey: 'op',
            title: 'operation',
            cell(record:any) {
              return (
                <>
                  <Button theme='primary' variant='text' onClick={()=>{ return handleManage(record)}}>
                    manage
                  </Button>
                  <Button theme='primary' variant='text' onClick={() => {
                    // handleClickDelete(record);
                  }}>
                    delete
                  </Button>
                </>
              );
            },
          },
        ]}
        loading={loading}
        data={datasourceList}
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
              getList({
                pageSize: pageInfo.pageSize,
                current: pageInfo.current,
              }),
            );
          },
          onPageSizeChange(size) {
            dispatch(
              getList({
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
