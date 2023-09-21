import classnames from 'classnames';
// import { selectDataSourceListSelect } from 'modules/dataSource/listSelect';
import { useAppSelector,useAppDispatch } from 'modules/store';
import React, { useEffect, useRef, useState } from 'react';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Input, Select } from 'tdesign-react';
// import { SelectTable } from '../Select';
import { GoldStep } from '../Step';
import { EditableCellTable } from '../EditTable';
import { HorizontalStepsWithNumbers } from '../SingleStep';
import Style from './index.module.less';
import {  getGoldList } from "../../../services/gold";
import {  getAllGoldTableList,listGoldTable,getAllGoldTableListForDistribution,setGoldTableId,setGoldTableName } from "modules/goldTable/base";


const TreeList = () => {
  const dispatch = useAppDispatch();
  // const [options, setOptions] = useState([]);
  // const [parentData, setParentData] = useState([]);
  // const [goldTableId, setGoldTableId ] = useState(0);
  // const [goldTableName, setGoldTableName ] = useState();
  const [current, setCurrent] = React.useState(0);
  // const [current,setCurrent] = useState(0);
  const treeRef = useRef(null);
  const pageState = useAppSelector(listGoldTable);
  const { goldTableList,options,goldTableId,goldTableName,dynamicOptions } = pageState;
  // const MyContext = React.createContext('');

  // const newOptions = [];
  
  useEffect(() => {

    dispatch(getAllGoldTableListForDistribution(null))
    // setOptions(newOptions);
  }, []);

 
  const putCurrent = (data:number)=>{
    setCurrent(data)
  }

  const handleClick = (data: any) => {
    // const goldTableName = context.node.data.label
    // const goldTableKey = context.node.data.value;
    // setGoldTableId(goldTableKey);
   console.log(JSON.stringify(data))
    if(data || data === 0){
      const obj = {
        goldTableId : data
      }
      dispatch(setGoldTableId(obj));
      setCurrent(0)
    }
    // if(data && data.goldTableName){
    //   dispatch(setGoldTableName(data))
    // }

    // setCurrent(0);
    
  }
  

  return (
    // <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor, CommonStyle.pageWithSize, Style.content)}>
    //   <div className={Style.treeContent}>
    //     <Input className={Style.search} suffixIcon={<SearchIcon />}
    //      onEnter={(value: any) => {
    //       dispatch(
    //         getAllGoldTableListForDistribution({
    //           tableName: value,
    //         }),
    //       );
    //     }}
    //      placeholder='Distribution info search /' />
    //     <Tree
    //       data={options}
    //       onClick={handleClick}
    //       activable
    //       hover
    //       transition
    //       ref={treeRef}
    //     />
    //   </div>
    //   <div className={Style.tableContent}>
    //      { goldTableId && goldTableId!= 0 ? <GoldStep  setCurrent={putCurrent} current={current} goldTableId={goldTableId} goldTableName={goldTableName}/>  : null }
    //   </div>
    // </div>
    // <div className={Style.tableContent}>
      <GoldStep  setCurrent={putCurrent} 
      handleClick={handleClick}
       dynamicOptions={dynamicOptions} current={current} goldTableId={goldTableId} goldTableName={goldTableName}/>  

      // </div>
  );
};

export default React.memo(TreeList);
