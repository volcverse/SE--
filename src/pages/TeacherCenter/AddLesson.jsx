import { Input, Button, Form } from 'antd';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default class AddLesson extends React.Component {
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
      <br/><br/><br/>
      <span style={{ color: '#000', fontSize: '1.9em' }}>新 开 课 程</span>
      <br/><br/>
        <Form.Item {...formItemLayout} label="课程类型">
          <Select defaultValue="tongshi" onChange={handleChange}>
            <Option value="tongshi">通识</Option>
            <Option value="major">专业</Option>
            <Option value="PE">体育</Option>
          </Select>
        </Form.Item>
        <Form.Item label="课程名" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item {...formItemLayout} label="学分">
          <Select defaultValue="1" onChange={handleChange}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>

        <Form.Item label="课程容量" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <Form.Item label="课程描述" {...formItemLayout}>
          <TextArea showCount maxLength={500} autoSize={{ minRows: 6, maxRows: 6 }}></TextArea>
        </Form.Item>


        <Form.Item>
          <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
            添加
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