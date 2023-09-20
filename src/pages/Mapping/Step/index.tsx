import classnames from 'classnames';
import React, { memo,useEffect } from 'react';
import CommonStyle from 'styles/common.module.less';
import { Steps } from 'tdesign-react';
import { StepOne, StepTwo, StepThree } from './components';
import { useAppDispatch, useAppSelector } from 'modules/store';
import {  selectListBase,getGoldTableColumnList } from "modules/goldTable/columns";
import { getAllGoldTableList } from "modules/goldTable/base";

const { StepItem: Step } = Steps;
interface IStep {
  title: string;
  content: string;
  component: any;
}

const steps: IStep[] = [
  {
    title: 'Edit mapping ',
    content: '申请提交已于12月21日提交',
    component: StepOne,
  },
  {
    title: 'Edit Distribution Info ',
    content: '预计1～3个工作日',
    component: StepTwo,
  },
  {
    title: 'Submit',
    content: '电子发票开出后7个工作日内联系',
    component: StepThree,
  },
  // {
  //   title: '完成',
  //   content: '',
  //   component: StepFour,
  // },
];

export const GoldStep = (props: any) =>  {
  const [current, setCurrent] = React.useState(0);
  const Comp = steps[current].component;
  const {goldTableId, goldTableName} = props;
  const pageState = useAppSelector(selectListBase);
  const dispatch = useAppDispatch();
  const {goldTableColumnList} = pageState;

  useEffect(() => {
    dispatch(
      getGoldTableColumnList(goldTableId),
    );
    // const resp = getGoldList({name: null})
    // resp.then((value:Array<any>)=>{
    //     for (let i = 0; i< value.length; i++){
    //       newOptions.push({
    //         label: value[i].goldTable,
    //         value: value[i].id,
    //         key: value[i].id
    //       });
    //     }
    
    // setOptions(newOptions);
    // })
    
  }, [goldTableId]);

  const next = () => {
    setCurrent(current + 1);
  };

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
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div style={{ marginTop: '52px' }}>
          <Comp steps={steps} current={current} callback={handleSteps} goldTableId={goldTableId} goldTableName={goldTableName} goldTableColumnList={goldTableColumnList} />
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
