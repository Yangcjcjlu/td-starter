import classnames from 'classnames';
import { selectDataSourceListSelect } from 'modules/dataSource/listSelect';
import { useAppSelector,useAppDispatch } from 'modules/store';
import React, { useEffect, useRef, useState } from 'react';
import CommonStyle from 'styles/common.module.less';
import { SearchIcon } from 'tdesign-icons-react';
import { Input, Tree } from 'tdesign-react';
// import { SelectTable } from '../Select';
import { GoldStep } from '../Step';
import { EditableCellTable } from '../EditTable';
import { HorizontalStepsWithNumbers } from '../SingleStep';
import Style from './index.module.less';
import {  getGoldList } from "../../../services/gold";
import {  getAllGoldTableList } from "modules/goldTable/base";






const TreeList = () => {
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState([]);
  const [parentData, setParentData] = useState([]);
  const [goldTableId, setGoldTableId ] = useState(0);
  const [goldTableName, setGoldTableName ] = useState();
  const [current,setCurrent] = useState(0);
  const treeRef = useRef(null);
  const pageState = useAppSelector(selectDataSourceListSelect);
  // const MyContext = React.createContext('');

  const newOptions = [];
  
  useEffect(() => {
    const resp = getGoldList({name: null})
    resp.then((value:Array<any>)=>{
        for (let i = 0; i< value.length; i++){
          newOptions.push({
            label: value[i].goldTable,
            value: value[i].id,
            key: value[i].id
          });
        }
    
    setOptions(newOptions);
    })
    
  }, []);

  const handleClick = (context: any) => {
   
    const goldTableName = context.node.data.label
    const goldTableKey = context.node.data.value;
    setGoldTableId(goldTableKey);
    setGoldTableName(goldTableName)
  }

  return (
    <div className={classnames(CommonStyle.pageWithColor, Style.content)}>
      <div className={Style.treeContent}>
        <Input className={Style.search} suffixIcon={<SearchIcon />}
         onEnter={(value: any) => {
          dispatch(
            getAllGoldTableList({
              name: value,
            }),
          );
        }}
         placeholder='please search for source/' />
        <Tree
          data={options}
          onClick={handleClick}
          activable
          hover
          transition
          ref={treeRef}
        />
      </div>
      <div className={Style.tableContent}>
      {/* <MyContext.Provider value={current}> */}
        {/* <HorizontalStepsWithNumbers/> */}
      {/* </MyContext.Provider> */}

        
        {/* {current === 0 ? <EditableCellTable/>: ''} */}
      
        {/* <SelectTable parentData = {parentData}/> */}
         { goldTableId && goldTableId!= 0 ? <GoldStep goldTableId={goldTableId} goldTableName={goldTableName}/>  : null }
      </div>
    </div>
  );
};

export default React.memo(TreeList);
