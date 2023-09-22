import React, { memo } from 'react';
import Style from './Menu.module.less';
import FullLogo from 'assets/svg/u (7).svg?component';
import MiniLogo from 'assets/svg/D1.svg?component';
import { useNavigate } from 'react-router-dom';

interface IProps {
  collapsed?: boolean;
}

export default memo((props: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={Style.menuLogo} onClick={handleClick}>
      {props.collapsed ? <MiniLogo /> : <FullLogo />}
    </div>
  );
});
