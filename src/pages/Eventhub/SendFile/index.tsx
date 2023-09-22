import classnames from 'classnames';
import { sendFile } from 'modules/eventHub/sendFile';
import { useAppDispatch } from 'modules/store';
import { memo, useRef } from 'react';
import CommonStyle from 'styles/common.module.less';
import { Button, Col, Form, Input, MessagePlugin, Row, Upload } from 'tdesign-react';
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

  return (
    <div className={classnames(CommonStyle.pageWithColor, CommonStyle.pageWithPadding, CommonStyle.pageWithSize)}>
      <div className={Style.formContainer}>
        <Form ref={formRef} onSubmit={onSubmit} labelWidth={100} labelAlign='top'>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>Send File to EventHub</div>
          </div>
          <Row className={Style.row}>
            <Col>
              <FormItem
                label='EventHub Name'
                name='eventhubName'
                initialData={INITIAL_DATA.eventhubName}
                rules={[{ required: true, message: 'EventHub name is required', type: 'error' }]}
              >
                <Input className={Style.inputText} placeholder='Please input EventHub name' />
              </FormItem>
            </Col>
          </Row>
          <Row className={Style.row}>
            <Col>
              <FormItem
                label='Upload File'
                name='file'
                initialData={INITIAL_DATA.file}
                rules={[{ required: true, message: 'Please choose upload file', type: 'error' }]}
              >
                <Upload tips='Please upload file to EventHub' autoUpload={false} multiple={false} />
              </FormItem>
            </Col>
          </Row>

          <FormItem>
            <Button type='submit' theme='primary'>
              Submit
            </Button>
            <Button type='reset' style={{ marginLeft: 12 }}>
              Reset
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
});
