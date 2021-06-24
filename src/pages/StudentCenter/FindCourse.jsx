import { 
  Input,
  Button,
  Form,
  Table,
  Tag,
  Space,

} from 'antd';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import axios from 'axios';
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





const FindCourse = () => {
	
    const [select, setSelect] = useState("name");
    const [data, setData] = useState([]);
    const columns = [
      {
        title: '课程名称',
        dataIndex: 'cname',
        key: 'cname',
        render: text => <a >{text}</a>,
      },
	  {
        title: '课程号',
        dataIndex: 'cid',
        key: 'cid',
        
      },
	  {
        title: '任课老师',
        dataIndex: 'tname',
        key: 'tname',
      },
     {
        title: '课程简介',
        dataIndex: 'description',
        key: 'description',
      },
    ];
    
    const data1 = [
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

    const onFinish = (values) => {
      // console.log("values",values);
      if(select === "name"){
        axios.get('http://127.0.0.1:8000/api/searchname?name=' + values.key).then(response => {
          setData(response.data);
          console.log('response: ', response.data);
        }).catch(function (error) {
          console.log(error);
        });
      }
      else if(select === "cID"){
        axios.get('http://127.0.0.1:8000/api/searchid?id=' + values.key).then(response => {
          setData(response.data);
          console.log('response: ', response.data);
        }).catch(function (error) {
          console.log(error);
        });
      }
      else if(select === "teacher"){
        axios.get('http://127.0.0.1:8000/api/searchteacher?t=' + values.key).then(response => {
          setData(response.data);
          console.log('response: ', response.data);
        }).catch(function (error) {
          console.log(error);
        });
      }

    };

    function handleChange(value) {
      console.log(`selected ${value}`);
      setSelect(value);
    }

    return (

      <>
        <br /><br /><br /><br /><br />
        <Form onFinish={onFinish}>
        <Form.Item label="搜索关键字" name="key" {...formItemLayout}>
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
        <Button style={{ width: 200 }} type="primary" shape="round" size='large'  htmlType="submit">
              查找课程信息
          </Button>
        </Form>
        <br/>
        <br /><br />

        <Table columns={columns} dataSource={data} />

        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br />

      </>
    )
}

export default FindCourse;

