import { Input, Button, Form } from 'antd';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;


export default class AddUser extends React.Component {
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
        <Form.Item {...formItemLayout} label="账号类型">
          <Select defaultValue="student" onChange={handleChange}>
            <Option value="teacher">教师</Option>
            <Option value="student">学生</Option>
            <Option value="manager">管理员</Option>
          </Select>
        </Form.Item>
        <Form.Item label="ID" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="姓名" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="性别" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="身份证号" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="班级" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="专业" {...formItemLayout}>
          <Input></Input>
        </Form.Item>


        <Form.Item>
          <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
            添加
                                    </Button>

          <Button style={{ width: 200, marginLeft: 30 }} type="primary" shape="round" size='large'>
            清空
                                    </Button>
        </Form.Item>

        <Form.Item>
          <Button style={{ width: 200 }} type="ghost" shape="round" size='large'>
            批量导入
                                    </Button>
        </Form.Item>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
    )
  }
}

function handleChange(value) {
  console.log(`selected ${value}`);
}