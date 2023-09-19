import React, { memo } from 'react';
import classnames from 'classnames';
import { Steps } from 'tdesign-react';
import { StepOne, StepTwo, StepThree, StepFour } from './components';
import CommonStyle from 'styles/common.module.less';

const { StepItem: Step } = Steps;
interface IStep {
  title: string;
  content: string;
  component: any;
}

const subscrGoldMappingEntity = {
  goldTableId: '',
  subName: '',
  mappingList: [],
};

const steps: IStep[] = [
  {
    title: 'Select Gold Table',
    content: '',
    component: StepOne,
  },
  {
    title: 'Distribution Mapping',
    content: '',
    component: StepTwo,
  },
  {
    title: 'Distribution Name',
    content: '',
    component: StepThree,
  },
  {
    title: 'Completed',
    content: '',
    component: StepFour,
  },
];

export default memo(() => {
  const [current, setCurrent] = React.useState(0);
  const Comp = steps[current].component;

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
          <Comp steps={steps} current={current} callback={handleSteps} data={subscrGoldMappingEntity} />
        </div>
      </>
    </div>
  );
});
