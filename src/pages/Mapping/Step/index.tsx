import classnames from 'classnames';
import { edit, getGoldTableColumnList, postTableDistributionItem, remove, selectListBase, updateMappingItem } from "modules/goldTable/columns";
import { useAppDispatch, useAppSelector } from 'modules/store';
import React, { memo, useEffect } from 'react';
import CommonStyle from 'styles/common.module.less';
import { Select, Steps } from 'tdesign-react';
import { StepOne, StepThree, StepTwo } from './components';



const { StepItem: Step } = Steps;
interface IStep {
  title: string;
  content: string;
  component: any;
}

const steps: IStep[] = [
  {
    title: 'Edit Element Info  ',
    content: 'Please edit distribution name to add element mapping',
    component: StepOne,
  },
  {
    title: 'Edit Distribution Info ',
    content: 'Please input distribution info',
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
  const {goldTableId, goldTableName, current,setCurrent,dynamicOptions,handleClick} = props;
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
      <div style={{marginLeft:'30px'}}>
        <Select
      style={{ width: '40%',marginBottom:'35px' }}
      clearable
      options={dynamicOptions}
      onChange={handleClick}
      placeholder='Distribution Info Search'></Select>
    </div>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} content={item.content}/>
          ))}
        </Steps>
        <div style={{ marginTop: '52px', marginLeft: '27px' }}>
          <Comp steps={steps} current={current} callback={handleSteps} goldTableId={goldTableId} goldTableName={goldTableName} 
          editInfo = {editInfo} submitInfo={submitInfo} handleClick={handleClick}
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
