import React, { Component, useState, useEffect } from 'react'
import { Table, Space } from 'antd';
import axios from 'axios';
import { Popconfirm, message } from 'antd';
import { Descriptions } from 'antd';


const columns = [
  {
    title: '时间',
    width: 100,
    dataIndex: 'time',
    key: 'time',
    fixed: 'left',
  },
  { title: '星期一', dataIndex: 'Mon', key: '1' },
  { title: '星期二', dataIndex: 'Tue', key: '2' },
  { title: '星期三', dataIndex: 'Wedn', key: '3' },
  { title: '星期四', dataIndex: 'Thr', key: '4' },
  { title: '星期五', dataIndex: 'Fri', key: '5' },
  { title: '星期六', dataIndex: 'Sat', key: '6' },
  { title: '星期日', dataIndex: 'Sun', key: '7' },
];

const data = [
  {
    time:'8:00-10:00',
    Mon:'',
    Tue:'',
    Wedn:'',
    Thr:'',
    Fri:'',
    Sat:'',
    Sun:'',
  },
  {
    time:'10:15-12:15',
    Mon:'',
    Tue:'',
    Wedn:'',
    Thr:'',
    Fri:'',
    Sat:'',
    Sun:'',
  },
  {
    time:'14:00-16:00',
    Mon:'',
    Tue:'',
    Wedn:'',
    Thr:'',
    Fri:'',
    Sat:'',
    Sun:'',
  },
  {
    time:'16:15-18:00',
    Mon:'',
    Tue:'',
    Wedn:'',
    Thr:'',
    Fri:'',
    Sat:'',
    Sun:'',
  },
  {
    time:'19:00-21:00',
    Mon:'',
    Tue:'',
    Wedn:'',
    Thr:'',
    Fri:'',
    Sat:'',
    Sun:'',
  },
];


const StudentCourseInfo = () => {
  const [tbdata, setTbdata] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/result/' + '3190100123').then(response => {
      setTbdata(response.data);
      console.log('response: ', response.data);
    }).catch(function (error) {
      console.log(error);
    });
  },[])



  return(
  <div>
  <Descriptions title="学生信息">
      <Descriptions.Item label="姓名">张三</Descriptions.Item>
      <Descriptions.Item label="学号">319010xxxx</Descriptions.Item>
      <Descriptions.Item label="身份证号">123456789XXXXX</Descriptions.Item>
      <Descriptions.Item label="班级">软工1901</Descriptions.Item>
      <Descriptions.Item label="总学分">xx</Descriptions.Item>
      <Descriptions.Item label="GPA">5.0</Descriptions.Item>
  </Descriptions>
  <br />
  <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
  </div>
  )
}
 
export default StudentCourseInfo;

 
