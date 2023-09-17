import classnames from 'classnames';
import { getDataItem, getItem } from 'modules/datasource/get';
import { updateItem } from 'modules/datasource/update';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { memo, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CommonStyle from 'styles/common.module.less';
import { Avatar, Button, Card, Col, Form, Input, MessagePlugin, Row, Select } from 'tdesign-react';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import Style from './index.module.less';

const { FormItem } = Form;
const { Option } = Select;
const { Group } = Avatar;

const INITIAL_DATA = {
  name: '',
  type: '',
  host: '',
  username: '',
};

export default memo(() => {
  const pageState = useAppSelector(getDataItem);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { item } = pageState;

  useEffect(() => {
    dispatch(
      getItem({
        id: id,
      }),
    );
    return () => {
      console.log('clear');
      // dispatch(clearPageState());
    };
  }, []);

  return (
    <div>
      <Card title='DataSource Info' bordered={false}>
        <div className={classnames(Style.infoBox)}>
        {/* <div key={item.}></div> */}
        </div>
      </Card>
    </div>
  );
});
