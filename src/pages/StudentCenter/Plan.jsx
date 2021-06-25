import React, { Component, useState, useEffect} from 'react'
import { Descriptions, Button,Popconfirm,Input, Select,message } from 'antd';
import { Image } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Table, Tag, Space } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Column, ColumnGroup } = Table;
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
const data = [
  {
    key: '1',
    cname: '认识实习',
	  ID:'x0001',
    credit: 1,
    type: '必修'
  },
  {
    key: '2',
    cname: '不认识实习',
	  ID:'x0000',
    credit: 2,
    type: '必修'
  }
];

const Plan = () => {
  const [tbdata, setTbdata] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/getAllCourse' ).then(response => {
      setTbdata(response.data);
      console.log('response: ', response.data);
    }).catch(function (error) {
      console.log(error);
    });
  },[]);

  return (
<>
      <Table dataSource={tbdata}>
  <Column title="课程号" dataIndex="ID" key="ID" />
  <Column title="课程名" dataIndex="cname" key="cname" />
  <Column title="学分" dataIndex="credit" key="credit" />
  <Column title="课程类别" dataIndex="type" key="type" />
  <Column title="教师" dataIndex="tname" key="tname" />
  <Column title="星期" dataIndex="day" key="day" />
  <Column title="时间段" dataIndex="time" key="time" />
  <Column
    title="Action"
    key="action"
    render={(text, record) => (
      <Space size="middle">
          <a onClick={()=>{console.log(record)}}>选择</a>
          <a onClick={()=>QuitCourseReturn(record.id)}>退选</a>
      </Space>
    )}
  />
</Table>

              <Popconfirm
                  title="您确认无误吗？定制之后将无法修改"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
              >
                  <Button type="primary">确认</Button>
              </Popconfirm>
  </>
  )

}

export default Plan;
function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}
