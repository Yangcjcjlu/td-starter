import classnames from 'classnames';
import { sendFile } from 'modules/eventHub/sendFile';
import { useAppDispatch } from 'modules/store';
import { memo, useRef } from 'react';
import CommonStyle from 'styles/common.module.less';
import {
  Button,
  Col,
  Form,
  Input,
  MessagePlugin,
  Row,
  Upload
} from 'tdesign-react';
import { FormInstanceFunctions, SubmitContext } from 'tdesign-react/es/form/type';
import Style from './index.module.less';

const { FormItem } = Form;

const INITIAL_DATA = {
  eventhubName: '',
  file: [],
};

export default memo(() => {
  const dispatch = useAppDispatch();
  const formRef = useRef<FormInstanceFunctions>();

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      console.log('form: ', formRef.current?.getFieldsValue?.(true));
      const p = e.fields;
      console.log('p: ', p);
      // debugger;
      dispatch(sendFile(p)).then((resp) => {
        console.log('resp: ', resp);
        if (resp.payload.code === 0) {
          MessagePlugin.info('submit successfully!');
        } else {
          MessagePlugin.error('Failed to send file');
        }
      });
    }
  };

  const handleFail = ({ file }: { file: any }) => {
    MessagePlugin.error(`Failed to send ${file.name}`);
  };

  return (
    <div className={classnames(CommonStyle.pageWithColor)}>
      <div className={Style.formContainer}>
        <Form ref={formRef} onSubmit={onSubmit} labelWidth={100} labelAlign='top'>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>Send File to EventHub</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem
                label='EventHub Name'
                name='eventhubName'
                initialData={INITIAL_DATA.eventhubName}
                rules={[{ required: true, message: 'EventHub Name is required', type: 'error' }]}
              >
                <Input placeholder='please input EventHub Name' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='File'
                name='file'
                initialData={INITIAL_DATA.file}
                rules={[{ required: true, message: 'File is required', type: 'error' }]}
              >
                <Upload onFail={handleFail} tips='please upload file to EventHub' autoUpload={false} multiple={false} />
              </FormItem>
            </Col>
          </Row>

          <FormItem>
            <Button type='submit' theme='primary'>
              submit
            </Button>
            <Button type='reset' style={{ marginLeft: 12 }}>
              reset
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
});
