import { 
  Input,
  Button,
  Form,
  Table,
  Tag,
  Space,

} from 'antd';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import React,{ useState }from 'react';
import { Select } from 'antd';
const { Option } = Select;
  
function selectQuery(recordID) {
  return 0
}

function selectCourseReturn(recordID) {
  var validation_code = selectQuery(recordID);
  if(validation_code==0)  alert('选课成功')
  else {
    switch(validation_code){
      case 1: alert('选课失败，失败原因1'); break;
      case 2: alert('选课失败，失败原因2'); break;
      default: alert('选课失败，未知原因');
    }
  }
}





export default class FindCourse extends React.Component {
	
  render() {

    const columns = [
      {
        title: '课程名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a >{text}</a>,
      },
	  {
        title: '课程号',
        dataIndex: 'courseid',
        key: 'courseid',
        
      },
	  {
        title: '任课老师',
        dataIndex: 'teacher',
        key: 'teacher',
      },
     {
        title: '课程简介',
        dataIndex: 'intro',
        key: 'intro',
      },
    ];
    
    const data = [
      {
        key: '1',
        name: '中国近现代史纲要',
        courseid: 32,
        teacher: 'John',
		intro:'课程简介',
      },
      {
        key: '2',
        name: '面向对象程序设计',
        courseid: 12,

        teacher: 'Steve Jobs',
        intro:'课程简介',
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
