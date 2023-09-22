import classnames from 'classnames';
import { ETrend, TrendIcon } from 'components/Board';
import { clearPageState, getList, searchListBase } from 'modules/search/base';
import { useAppDispatch, useAppSelector } from 'modules/store';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Button, Col, Input, Row, Table, Tag ,Link} from 'tdesign-react';
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
          ingestedSource:'ingestedSource',
          sourceElementName:'sourceElementName',
          description:'description',
          goldTable:'goldTable',
          goldElementName:'goldElementName',
          distributionName:'distributionName',
          disbributionElementName:'disbributionElementName'
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
            colKey: 'ingestedSource',
            title: 'Ingested Source',
            cell:({row}) => {
              // console.log("row==>"+JSON.stringify(row['']))
              return (<Link href='http://20.198.178.168:3000' target="_blank" theme="primary">{row.ingestedSource}</Link>)
            }
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
            title: 'Description',
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
            colKey: 'disbributionElementName',
            title: 'Disbribution Element Name',
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
