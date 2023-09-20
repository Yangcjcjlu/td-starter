import React, { memo } from 'react';
import { Button } from 'tdesign-react';
import { CheckCircleIcon } from 'tdesign-icons-react';
import { useNavigate } from 'react-router-dom';

import style from './index.module.less';





export default memo((props: { current: number; callback: Function; steps: any[] }) => {
  const { current, callback, steps } = props;
  const nav = useNavigate();
  const next = () => {
    callback('next');
  };

  const prev = () => {
    callback('back');
  };

  const goback = () => {
    nav(`/`);
  }

  return (
    <div className={style.Content}>
      <CheckCircleIcon className={style.icon} />
      <div className={style.title}>Success</div>
      <div className={style.description}>You can go back now</div>
      <div>
        <Button onClick={goback}>go back to homepage</Button>
        {/* <Button className={style.rightButton} theme='default'>
          查看进度
        </Button> */}
      </div>
    </div>
  );
});
