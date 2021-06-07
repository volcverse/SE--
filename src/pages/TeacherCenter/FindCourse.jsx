import { Input, Button, Form } from 'antd';
import React from 'react';
import { Select } from 'antd';
const { Option } = Select;


export default class FindCourse extends React.Component {
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
        <Form.Item label="搜索关键字" {...formItemLayout}>
          <Input></Input>
        </Form.Item>
        <Form.Item {...formItemLayout} label="依据">
          <Select defaultValue="name" onChange={handleChange}>
            <Option value="name">课程名</Option>
            <Option value="cID">课程号</Option>
            <Option value="teacher">任课教师</Option>
            <Option value="credit">学分</Option>
          </Select>
        </Form.Item>
        <br/>
        <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
              查找课程信息
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
