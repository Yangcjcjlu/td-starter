import classnames from 'classnames';
import { ETrend, TrendIcon } from 'components/Board';
import { clearPageState, getList, searchListBase } from 'modules/search/base';
import { useAppDispatch, useAppSelector } from 'modules/store';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Button, Col, Input, Row, Table, Tag } from 'tdesign-react';
import { getDataSourceList } from '../../../services/datasource';
import { debounce } from '../../../services/debounce';
import style from './index.module.less';

export default memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(searchListBase);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([1, 2]);

  const {  current, pageSize, total } = pageState;
  const [ list, setList ]  = useState([])
  const [loading,setLoading ] = useState(false)

  const nav = useNavigate();

  useEffect(() => {
    // dispatch(
    //   getList({
    //     pageSize: pageState.pageSize,
    //     current: pageState.current,
    //   }),
    // );
    // return () => {
    //   dispatch(clearPageState());
    // };

     let list = [
        {
            sourceName:'sourceName',
            attributeName:'AttributeName',
            goldName:'GoldName',
            targetName:'TargetName'
        }
    ]
    setList(list);

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
        <Col>
          <Input
            suffixIcon={<SearchIcon />}
            placeholder='Please Input Gold Table Name/Attribute Name'
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
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'sourceName',
            title: 'Source Name',
          },
          {
            align: 'left',
            width: 200,
            ellipsis: true,
            colKey: 'attributeName',
            title: 'Attribute Name',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'goldName',
            title: 'Gold Name',
          },
          {
            align: 'left',
            width: 150,
            ellipsis: true,
            colKey: 'targetName',
            title: 'Target Name',
          },
          
        
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
