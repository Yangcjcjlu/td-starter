import classnames from 'classnames';
import { getDataItem, getItem } from 'modules/datasource/get';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { memo, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'tdesign-react';
import Style from './index.module.less';

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
  }, []);

  return (
    <div>
      <Card title='DataSource Info' bordered={false}>
        <div key={item.id} className={classnames(Style.infoBox)}>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Datasource Name</h1>
            <span>{item.datasourceName}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Datasource Type</h1>
            <span>{item.datasourceType}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Business Type</h1>
            <span>{item.businessType}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Ingestion Type</h1>
            <span>{item.ingestionType}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Consume Queue</h1>
            <span>{item.consumeQueue}</span>
          </div>
          <div className={classnames(Style.infoBoxItem)}>
            <h1>Comment</h1>
            <span>{item.comment}</span>
          </div>
        </div>
      </Card>
    </div>
  );
});
