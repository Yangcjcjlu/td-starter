import classnames from 'classnames';
import React, { useRef } from 'react';
import { SearchIcon } from 'tdesign-icons-react';
import { Input, Tree } from 'tdesign-react';
import { SelectTable } from '../Select';
// import { treeList } from './consts';
import CommonStyle from 'styles/common.module.less';
import Style from './index.module.less';


const treeList = [
  {
    label: '深圳总部',
    value: 0,
    children: [
      {
        label: '总办',
        value: '0-0',
      },
      {
        label: '市场部',
        value: '0-1',
        children: [
          {
            label: '采购1组',
            value: '0-1-0',
          },
          {
            label: '采购2组',
            value: '0-1-1',
          },
        ],
      },
      {
        label: '技术部',
        value: '0-2',
      },
    ],
  },
  {
    label: '北京总部',
    value: 1,
    children: [
      {
        label: '总办',
        value: '1-0',
      },
      {
        label: '市场部',
        value: '1-1',
        children: [
          {
            label: '采购1组',
            value: '1-1-0',
          },
          {
            label: '采购2组',
            value: '1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: '上海总部',
    value: 2,
    children: [
      {
        label: '市场部',
        value: '2-0',
      },
      {
        label: '财务部',
        value: '2-1',
        children: [
          {
            label: '财务1组',
            value: '2-1-0',
          },
          {
            label: '财务2组',
            value: '2-1-1',
          },
        ],
      },
    ],
  },
  {
    label: '湖南',
    value: 3,
  },
  {
    label: '湖北',
    value: 4,
  },
];




const handleClick = (context:any) => {
  
  // console.log(treeRef);
  // console.log('context==>')
  // console.log(JSON.stringify(context))
}

const checkWithRef = () =>{
  const treeRef = useRef(null);
}



const TreeTable: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithColor, Style.content)}>
    <div className={Style.treeContent}>
      <Input className={Style.search} suffixIcon={<SearchIcon />} placeholder='please search for source/'  />
      <Tree data={treeList} 
      onClick={handleClick}
      activable 
      hover 
      transition />
    </div>
    <div className={Style.tableContent}>
      <SelectTable />
    </div>
  </div>
);

export default TreeTable;
