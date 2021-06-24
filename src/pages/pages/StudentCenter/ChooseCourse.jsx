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
function QuitCourseReturn(recordID) {
  var validation_code = selectQuery(recordID);
  if(validation_code==0)  alert('退课成功')
  else {
    switch(validation_code){
      case 1: alert('退课失败，失败原因1'); break;
      case 2: alert('退课失败，失败原因2'); break;
      default: alert('退课失败，未知原因');
    }
  }
}





export default class ChooseCourse extends React.Component {
	
  render() {

    const columns = [
      {
        title: '课程名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a >{text}</a>,
      },
      {
        title: '课程编号',
        dataIndex: 'id',
        key: 'id',
      },
	  {
        title: '学分',
        dataIndex: 'credit',
        key: 'credit',
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
        title: '余量',
        dataIndex: 'remain',
        key: 'remain',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a onClick={()=>selectCourseReturn(record.id)}>选择</a>
            <a onClick={()=>QuitCourseReturn(record.id)}>退选</a>
          </Space>
        ),
      },
	  {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
      },
    ];
    
    const data = [
      {
        key: '1',
        name: '中国近现代史纲要',
        id: 32,
		credit:1,
        teacher: 'John',
        date: '周7-1,2,3节',
        classroom: '紫金港西1-111',
		remain:80,
		status:'未选'
      },
      {
        key: '2',
        name: '面向对象程序设计',
        id: 12,
		credit:1,
        teacher: 'Steve Jobs',
        date: '周1-4,5,6节',
        classroom: '紫金港东8-888',
		remain:80,
		status:'未选'
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


