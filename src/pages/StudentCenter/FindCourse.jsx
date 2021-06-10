import { 
  Input,
  Button,
  Form,
  Table,
  Tag,
  Space,

} from 'antd';
import React from 'react';
import { Select } from 'antd';
const { Option } = Select;


export default class FindCourse extends React.Component {

  
  render() {
    const columns = [
      {
        title: '课程名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '课程编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '授课教师',
        dataIndex: 'teacher',
        key: 'teacher',
      },
      {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '教室',
        dataIndex: 'classroom',
        key: 'classroom',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>选择课程</a>
            <a>其它</a>
          </Space>
        ),
      },
    ];
    
    const data = [
      {
        key: '1',
        name: '中国近现代史纲要',
        id: 32,
        teacher: 'John',
        date: '周7-1,2,3节',
        classroom: '紫金港西1-111'
      },
      {
        key: '2',
        name: '面向对象程序设计',
        id: 12,
        teacher: 'Steve Jobs',
        date: '周1-4,5,6节',
        classroom: '紫金港东8-888'
      },
    ];

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
        <br /><br />

        <Table columns={columns} dataSource={data} />
        
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

