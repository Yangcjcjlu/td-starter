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
        <div key={item.id} className={classnames(Style.infoBox)}>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Name</h1>
            <span>{item.name}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Host</h1>
            <span>{item.host}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Port</h1>
            <span>{item.port}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Username</h1>
            <span>{item.username}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Password</h1>
            <span>{item.password}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Region</h1>
            <span>{item.region}</span>
          </div>{' '}
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Type</h1>
            <span>{item.type}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Topic</h1>
            <span>{item.topic}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Consumer Group</h1>
            <span>{item.consumerGroup}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Bucket Name</h1>
            <span>{item.bucketName}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>AccessKey</h1>
            <span>{item.accessKey}</span>
          </div>{' '}
          <div className={classnames(Style.infoBoxItem)}>
            <h1>SecretKey</h1>
            <span>{item.secretKey}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Created At</h1>
            <span>{item.createdAt}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Created By</h1>
            <span>{item.createdBy}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Updated At</h1>
            <span>{item.updatedAt}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Updated By</h1>
            <span>{item.updatedBy}</span>
          </div>
        </div>
      </Card>
    </div>
  );
});
