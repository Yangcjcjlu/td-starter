import classnames from 'classnames';
import React, { memo, useState } from 'react';
import { Steps,  } from 'tdesign-react';
import CommonStyle from '../../../styles/common.module.less';
import './index.module.less';

const { StepItem } = Steps;


// const steps: IStep[] = [
//   {
//     title: '申请提交',
//     content: '申请提交已于12月21日提交',
//     component: StepOne,
//   },
//   {
//     title: '电子发票',
//     content: '预计1～3个工作日',
//     component: StepTwo,
//   },
//   {
//     title: '发票已邮寄',
//     content: '电子发票开出后7个工作日内联系',
//     component: StepThree,
//   },
//   {
//     title: '完成',
//     content: '',
//     component: StepFour,
//   },
// ];

export const  HorizontalStepsWithNumbers = (props:any) => {
  // const [current, setCurrent] = useState(0);
  const [current, setCurrent] = useState(0);
  const {updateCurrent } = props;

  // const Comp = steps[current].component;

  

  // useEffect()

  return (
    <Steps theme='dot' defaultCurrent={0}>
      {/* <div style={divStyle} onClick={getOne}> */}
        <StepItem title='已完成的步骤' content='这里是提示文字' />
      {/* </div> */}
      {/* <div style={divStyle} onClick={getTwo}> */}
        <StepItem title='进行中的步骤' content='这里是提示文字' />
      {/* </div> */}
      {/* <div style={divStyle} onClick={getThree}> */}
        <StepItem title='未进行的步骤' content='这里是提示文字' />
      {/* </div> */}
    </Steps>
  );
}

const singleStep: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <HorizontalStepsWithNumbers />
  </div>
);

export default memo(singleStep);