import { 
  Input,
  Button,
  Form,
  Table,
  Tag,
  Space,

} from 'antd';
import { Drawer, List, Avatar, Divider, Col, Row,Popconfirm, message } from 'antd';
import React,{ useState, useEffect }from 'react';
import axios from 'axios';
import { Select } from 'antd';
const { Column, ColumnGroup } = Table;

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




const ChooseCourse = () =>  {
  const [tbdata, setTbdata] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/getPlanByID?id=' + '3190100123').then(response => {
      setTbdata(response.data);
      console.log('response: ', response.data);
    }).catch(function (error) {
      console.log(error);
    });
  },[]);

  return (
<>
<p style={{'font-size':'30px'}}>选择课程</p>
      <Table dataSource={tbdata}>
  <Column title="课程号" dataIndex="ID" key="ID" />
  <Column title="课程名" dataIndex="cname" key="cname" />
  <Column title="学分" dataIndex="credit" key="credit" />
  <Column title="课程类别" dataIndex="type" key="type" />
  <Column title="教师" dataIndex="tname" key="tname" />
  <Column title="星期" dataIndex="day" key="day" />
  <Column title="时间段" dataIndex="time" key="time" />
  <Column title="总量" dataIndex="total" key="total" />
  <Column title="已选人数" dataIndex="selected" key="selected" />
  <Column
    title="Action"
    key="action"
    render={(text, record) => (
      <Space size="middle">
        {/* // TODO: implement real stuid */}
          <a onClick={()=>{chooseCourse(record.ID, '3190100123')}}>选择</a>
          <a onClick={()=>{delCourse(record.ID, '3190100123')}}>从课表中删除</a>
      </Space>
    )}
  />
</Table>

  </>
  )
}

const chooseCourse = (cid, stuid) => {
  axios.get('http://127.0.0.1:8000/api/getManageState').then(response => {
    if(response.data === 0){
      message.warning("未开始选课!");
    }
    else if(response.data === 2){
      message.warning("初选已结束!");
    }
    else if(response.data === 4){
      message.warning("补选已结束!");
    }
  }).catch(function (error) {
    console.log(error);
  });


  axios.get('http://127.0.0.1:8000/api/chooseCourse?stu='+stuid + '&cid='+cid).then(response => {
    if(response.data === 1){
      message.success("成功选课!");
    }
    else if (response.data === "Time_Conflict"){
      message.warning("时间冲突");
    }
    else if (response.data === "No_remain"){
      message.error("课程无余量");
    }
    else if (response.data === "Success"){
      message.success("选课成功");
    }
  }).catch(function (error) {
    console.log(error);
  });
};

const delCourse = (cid, stuid) => {
  axios.get('http://127.0.0.1:8000/api/delCourse?stu='+stuid + '&cid='+cid).then(response => {
    console.log(response.data);
    if(response.data !== 0){
      message.success("成功删除!");
    }
    else{
      message.warning("已删除或未选择该课程");

    }
  }).catch(function (error) {
    console.log(error);
  });
};
export default ChooseCourse;

