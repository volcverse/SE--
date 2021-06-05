import { Input, Button, Form } from 'antd';
import { Popconfirm, message } from 'antd';
import React from 'react';
import { Select } from 'antd';
const { Option } = Select;


export default class ChangeUser extends React.Component {
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

      <>
        <br /><br /><br /><br /><br />
        <Form.Item label="目标账号" {...formItemLayout}>
          <Input></Input>
        </Form.Item>
        <Form.Item {...formItemLayout} label="目标账号类型">
          <Select defaultValue="student" onChange={handleChange}>
            <Option value="teacher">教师</Option>
            <Option value="student">学生</Option>
            <Option value="manager">管理员</Option>
          </Select>
        </Form.Item>
        <br/>
        <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
              查找用户信息
            </Button>
        <br/>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br />

      </>
    )
  }
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function confirm(e) {
  console.log(e);
  message.success('操作确认');
}

function cancel(e) {
  console.log(e);
  message.error('操作取消');
}
