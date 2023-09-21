import classnames from 'classnames';
import React, { memo,useEffect } from 'react';
import CommonStyle from 'styles/common.module.less';
import { Steps } from 'tdesign-react';
import { StepOne, StepTwo, StepThree } from './components';
import { useAppDispatch, useAppSelector } from 'modules/store';
import {  selectListBase,getGoldTableColumnList,remove,edit,updateMappingItem,postTableDistributionItem } from "modules/goldTable/columns";
import { getAllGoldTableList } from "modules/goldTable/base";
import { updateMapping } from 'services/mapping';



const { StepItem: Step } = Steps;
interface IStep {
  title: string;
  content: string;
  component: any;
}

const steps: IStep[] = [
  {
    title: 'Edit Distribution Info  ',
    content: 'please input expected distribution name',
    component: StepOne,
  },
  {
    title: 'Edit Current Name ',
    content: 'please input current name',
    component: StepTwo,
  },
  {
    title: 'Submit',
    content: 'Submit and back to homepage',
    component: StepThree,
  },
  // {
  //   title: '完成',
  //   content: '',
  //   component: StepFour,
  // },
];

export const GoldStep = (props: any) =>  {
  // const [current, setCurrent] = React.useState(0);
  const {goldTableId, goldTableName, current,setCurrent} = props;
  const Comp = steps[current].component;
  const pageState = useAppSelector(selectListBase);
  const dispatch = useAppDispatch();
  const {goldTableColumnList} = pageState;

  useEffect(() => {
    dispatch(
      getGoldTableColumnList(goldTableId),
    );
    
  }, [goldTableId]);

  const next = () => {
    setCurrent(current + 1);
  };

  const removeinfo = (id:any) =>{
    const array = [];
    for(let i = 0;i< goldTableColumnList.length; i++){
      if(goldTableColumnList[i].id != id){
        array.push(goldTableColumnList[i])
      }
    }
    dispatch(remove(array));
  }

  const editInfo = (data:any) =>{
    const array = [];
    for(let i = 0;i< goldTableColumnList.length; i++){
       if(data.id == goldTableColumnList[i].id){
        array.push(data)
       }else{
        array.push(goldTableColumnList[i]);
       }
    }
    dispatch(edit(array));
  }

  

  const submitInfo = (data:any) =>{
    let obj ={
      subscr: data.subscr,
      distributionType:data.distributionType,
      goldTableColumnList:goldTableColumnList,
      goldTableId:goldTableId,
      goldTableName:goldTableName
    }

    //mock
    dispatch(updateMappingItem(obj));

    let tableDistributeInfo ={
      goldTable:goldTableName,
      subscrTopic:data.subscr,
      subscrType:data.distributionType,
    }
    dispatch(postTableDistributionItem(tableDistributeInfo));

    next();
  }

  
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSteps = (value: string) => {
    switch (value) {
      case 'back':
        prev();
        break;
      case 'next':
        next();
        break;
      case 'first':
        setCurrent(0);
        break;
      default:
        break;
    }
  };

  return (
    <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
      <>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} content={item.content}/>
          ))}
        </Steps>
        <div style={{ marginTop: '52px' }}>
          <Comp steps={steps} current={current} callback={handleSteps} goldTableId={goldTableId} goldTableName={goldTableName} 
          editInfo = {editInfo} submitInfo={submitInfo}
          goldTableColumnList={goldTableColumnList} removeinfo={removeinfo} />
        </div>
      </>
    </div>
  );
};

const GoldStepPage: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <GoldStep />
  </div>
);

export default memo(GoldStepPage);
