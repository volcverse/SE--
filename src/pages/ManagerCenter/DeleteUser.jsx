import { Input, Button, Form } from 'antd';
import { Popconfirm, message } from 'antd';
import React from 'react';


export default class DeleteUser extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };

    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Form.Item label="账号ID" {...formItemLayout}>
          <Input></Input>
        </Form.Item>
        <br /><br /><br /><br />
        <Form.Item>
          <Popconfirm
            title="您确定要删除此账号吗"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
              删除
                                    </Button>
          </Popconfirm>
        </Form.Item>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br />
      </div>
    )
  }
}

function confirm(e) {
  console.log(e);
  message.success('操作确认');
}

function cancel(e) {
  console.log(e);
  message.error('操作取消');
}
