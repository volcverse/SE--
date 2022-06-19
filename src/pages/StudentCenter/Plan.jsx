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


const Plan = (props) => {
  const [tbdata, setTbdata] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/getDistinctCourse' ).then(response => {
      setTbdata(response.data);
      console.log('response: ', response.data);
    }).catch(function (error) {
      console.log(error);
    });
  },[]);

  return (
<>
    <p style={{'font-size':'30px'}}>定制您的培养方案</p>
      <Table dataSource={tbdata}>
  <Column title="课程号" dataIndex="ID" key="ID" />
  <Column title="课程名" dataIndex="cname" key="cname" />
  <Column title="学分" dataIndex="credit" key="credit" />
  <Column title="课程类别" dataIndex="type" key="type" />
  {/* <Column title="教师" dataIndex="tname" key="tname" />
  <Column title="星期" dataIndex="day" key="day" />
  <Column title="时间段" dataIndex="time" key="time" /> */}
  <Column
    title="Action"
    key="action"
    render={(text, record) => (
      <Space size="middle">
          <a onClick={()=>{chooseCourse(record.ID, props.username)}}>选择</a>
          <a onClick={()=>{delCourse(record.ID, props.username)}}>从培养方案中删除</a>
      </Space>
    )}
  />
</Table>
  </>
  )

}


const chooseCourse = (cid, stuid) => {
  axios.get('http://127.0.0.1:8000/api/choosePlan?stu='+stuid + '&cid='+cid).then(response => {
    console.log('choosePlan: ', response.data);
    if(response.data !== 1){
      message.warning("培养方案中已存在该课程");
    }
    else{
      message.success("成功添加到培养方案!");

    }
  }).catch(function (error) {
    console.log('http://127.0.0.1:8000/api/choosePlan?stu='+stuid + '&cid='+cid);
    console.log(error);
  });
};

const delCourse = (cid, stuid) => {
  axios.get('http://127.0.0.1:8000/api/delCourseinPlan?stu='+stuid + '&cid='+cid).then(response => {
    if(response.data !== 0){
      message.success("成功删除!");
    }
    else{
      message.warning("已删除或课程信息不存在");
    }
  }).catch(function (error) {
    console.log(error);
  });
};

export default Plan;
function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}
