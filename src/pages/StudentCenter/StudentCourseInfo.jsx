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
]
const d = [
  {
    key:'1',
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
    key:'2',
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
    key:'3',
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
    key:'4',
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
    key:'5',
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

const week=[
  'Mon','Tue','Wedn','Thr','Fri','Sat','Sun',
]

const StudentCourseInfo = (props) => {
  const [data,setData] = useState([]);
  console.log('props:', props.username);

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/searchcourseById/' + props.username).then(response => {
      console.log('response', 'http://127.0.0.1:8000/api/searchcourseById/' + props.username);
  
      let tmpdata = [
        {
          key:'1',
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
          key:'2',
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
          key:'3',
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
          key:'4',
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
          key:'5',
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
      let t = response.data;
      console.log('response: ', t, "d", d);
      t.forEach(function(value,index,array){
        let tmpdate = week[value.day-1];
        console.log(tmpdate);
        // tmpdata[value.time-1][tmpdate] = value.name;
        console.log(value.name);
        switch(value.day){
          case 1:tmpdata[value.time-1].Mon = value.name;break;
          case 2:tmpdata[value.time-1].Tue = value.name;break;
          case 3:tmpdata[value.time-1].Wedn = value.name;break;
          case 4:tmpdata[value.time-1].Thr = value.name;break;
          case 5:tmpdata[value.time-1].Fri = value.name;break;
          case 6:tmpdata[value.time-1].Sat = value.name;break;
          case 7:tmpdata[value.time-1].Sun = value.name;break;
        }
      });
      console.log(tmpdata);
      setData(tmpdata);
  
    }).catch(function (error) {
      console.log(error);
    });
  },[])


  return(
  <div>

  <br />
  <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
  </div>
  )
}
 
export default StudentCourseInfo;

 
