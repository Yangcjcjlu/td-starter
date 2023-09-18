import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import CommonStyle from 'styles/common.module.less';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { SearchIcon } from 'tdesign-icons-react';
import { Input, Tree } from 'tdesign-react';
import { SelectTable } from '../Select';
import Style from './index.module.less';
import { clearPageState, getMockList, selectDataSourceListSelect } from 'modules/dataSource/listSelect';




const TreeList = () => {
    
    const [options, setOptions] = useState([]);
    const [parentData, setParentData] = useState([]);
    const treeRef = useRef(null);
    const pageState = useAppSelector(selectDataSourceListSelect);

  
    useEffect(() => {
      const newOptions = [];
      for (let i = 1; i <= 3000; i++) {
        newOptions.push({
          label: `第${i}段`,
          value: i,
          key: i,
          children: [
            {
              label: `第${i}段第1个子节点`,
              value: `${i}.1`,
              key: `${i}.1`,
            },
            {
              label: `第${i}段第2个子节点`,
              value: `${i}.2`,
              key: `${i}.2`,
            },
          ],
        });
      }
      setOptions(newOptions);
    }, []);
  
    const handleClick = (context:any) => {
         console.log("treeRef")
        console.log(treeRef.current);
        console.log(treeRef.current.getItems()[0]);
        console.log(treeRef.current.getParents())
        const parentData = [];
        const data1 = {
          "id": 1,
          "name": "MySQL Database",
          "type": "Relational",
          "host": "localhost",
          "port": 3306,
          "username": "root",
          "password": "password123",
          "accessKey": "",
          "secretKey": "",
          "bucketName": "",
          "region": "",
          "topic": "",
          "consumerGroup": "",
          "createdBy": "",
          "createdAt": "2023-09-12T02:00:00.000+00:00",
          "updatedBy": "test_user",
          "updatedAt": "2023-09-16T18:53:17.000+00:00"
        };
        const data2 = {
          "id": 2,
          "name": "Amazon S3 Bucket",
          "type": "Cloud Storage",
          "host": "",
          "port": 0,
          "username": "",
          "password": "",
          "accessKey": "YOUR_ACCESS_KEY",
          "secretKey": "YOUR_SECRET_KEY",
          "bucketName": "my-bucket",
          "region": "us-west-2",
          "topic": "",
          "consumerGroup": "",
          "createdBy": "",
          "createdAt": "2023-09-12T02:00:00.000+00:00",
          "updatedBy": "",
          "updatedAt": "2023-09-12T02:00:00.000+00:00"
        }
        parentData.push(data1);
        parentData.push(data2);
        console.log("before setup!");
        setParentData(parentData);
                // console.log('context==>')
        // console.log(JSON.stringify(context))
      }

  return (
    <div className={classnames(CommonStyle.pageWithColor, Style.content)}>
    <div className={Style.treeContent}>
      <Input className={Style.search} suffixIcon={<SearchIcon />} placeholder='please search for source/'  />
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
      <SelectTable parentData = {parentData}/>
    </div>
  </div>
  );
};

export default React.memo(TreeList);
