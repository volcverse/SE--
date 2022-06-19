import { Table,Layout, Menu, Descriptions,Card,Badge} from 'antd';

import{CopyOutlined,UnorderedListOutlined,LeftOutlined,DeleteOutlined,DiffOutlined,CloseSquareOutlined,CheckSquareOutlined,DesktopOutlined,IdcardOutlined,ReadOutlined,MailOutlined,SettingOutlined,PlayCircleOutlined,BorderOutlined}from'@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Button,Tag, Image, Checkbox, Modal, Form, Input, DatePicker, TimePicker } from 'antd';
import {
  AppstoreOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

// todo listening 定时check
// * 判断考试状态
function exam_state_judge(exam_start_time, exam_end_time) {
  let now = new Date();
  let year=now.getFullYear();  //取得4位数的年份
  let month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
  let date=now.getDate();      //返回日期月份中的天数（1到31）
  let hour=now.getHours();     //返回日期中的小时数（0到23）
  let minute=now.getMinutes(); //返回日期中的分钟数（0到59）
  let second=now.getSeconds(); //返回日期中的秒数（0到59）
  let crt_timestamp = year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
  let exam_state;
  // judge exam state
  if ( crt_timestamp < exam_start_time ) {
    exam_state = '未发布';
  } else if ( crt_timestamp >= exam_start_time && crt_timestamp <= exam_end_time) {
    exam_state = '进行中';
  } else if ( crt_timestamp > exam_end_time ) {
    exam_state = '已结束';
  }

   return exam_state;
}

let datasource=[];

function bac(tid){
  axios
    .get('http://127.0.0.1:8000/examstateupdate',
      { 
        headers:{'content-type':'application/x-www-form-urlencoded'},

      }
    ).then((res)=>{

    })
  console.log(123);
  if(datasource.length==0)
  axios
    .get('http://127.0.0.1:8000/examtea/query/'+tid,
      { 
        headers:{'content-type':'application/x-www-form-urlencoded'},

      }
    ).then((res)=>{
      let texamid=res.data;
      datasource=[];
      for(let i=0;i<=texamid.length-1;i++){
        axios
        .get('http://127.0.0.1:8000/show_test_paperbyid/'+texamid[i]['paper_id'],
          { 
            headers:{'content-type':'application/x-www-form-urlencoded'},
    
          }
        ).then((res)=>{
            console.log(res.data);
            
            datasource.push({
                tid:i,
                paper_name:res.data[0]['paper_name'],
                paper_id:texamid[i]['paper_id'],
                exam_id:texamid[i]['exam_id'],
                course_id:texamid[i]['course_id'],
                state:texamid[i]['state'],
                starttime:texamid[i]['start_time'],
                endtime:texamid[i]['end_time'],
              })
              console.log(datasource);
        });       
      }
      return 1;
    })
}
class StudentCenter extends React.Component {
  constructor(props){

    super(props);
  this.state = {
    current:'mail',
    visible: false,
    tid:this.props.location.state.username,
    y:bac(this.props.location.state.username),
    columns  :[
      {
        title: '',
        dataIndex: 'tid',
        width:'100%',
        render:text=>
        <Card title={<div><DesktopOutlined />  <Link to={"/testcenter_tea/testpaper1/"+datasource[text]['exam_id']}>{datasource[text]['paper_name']}</Link></div>} extra={<div><Tag color="blue">{datasource[text]['state']}</Tag></div>} style={{ marginRight: 0,marginLeft: 0 }}>
                  <div class='row1'><div>开始时间：{datasource[text]['starttime']}</div> <div>结束时间：{datasource[text]['endtime']}</div></div>
        </Card>
      },
    ],
  };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>考试管理</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            
            
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>

            <Table columns={this.state.columns} dataSource={datasource}/>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
  }


}
export default StudentCenter;
