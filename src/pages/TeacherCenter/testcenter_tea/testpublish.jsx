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
    .get('http://127.0.0.1:8000/show_test_paperbytid/'+tid,
      { 
        headers:{'content-type':'application/x-www-form-urlencoded'},

      }
    ).then((res)=>{
      let texamid=res.data;
      datasource=[];
      for(let i=0;i<=texamid.length-1;i++){
        datasource.push({
          tid:i,
          paper_id:texamid[i]['paper_id'],
          teacher_id:texamid[i]['teacher_id'],
          course_id:texamid[i]['course_id'],
          paper_name:texamid[i]['paper_name']
        })
          
        
      }
      return 1;
    })
}
class asd extends React.Component {
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
        <Card title={<div><DesktopOutlined />  {datasource[text]['paper_id']} {datasource[text]['paper_name']}</div>}  style={{ marginRight: 0,marginLeft: 0 }}>
                  <div class='row1'> <div style={{ textAlign:'right'}}><ReadOutlined /> {datasource[text]['course_id']}  &nbsp;&nbsp;&nbsp; <IdcardOutlined />{datasource[text]['teacher_id']}</div></div>
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

  // * 创建考试
  exam_create=values=> {
    console.log(values);
    let exam_date = values['exam_date'].format('YYYY-MM-DD');
    let exam_start_time=values['exam_time_range'][0].format('HH:mm:ss');
    let exam_end_time = values['exam_time_range'][1].format('HH:mm:ss');
    let paper_id = values['paper_id'];
    let course_id = values['course_id'];
    let teacher_id = values['teacher_id'];
    // 拼接考试时间
    let start_time = exam_date + " " + exam_start_time;
    let end_time = exam_date + " " + exam_end_time;
    let state ='未开始';
    // 组合url参数
    let exam_params = paper_id + "/" + course_id + "/" + teacher_id + "/" +
      start_time + "/" + end_time + "/" + state;
    axios.get('http://127.0.0.1:8000/exam/create/'+exam_params, {
      headers:{'content-type':'application/x-www-form-urlencoded'},
    }).then((res)=>{
      this.setState({
        visible: false,
      });
    }).catch((err)=>{
      alert(err)
    })
  }


  render() {
    const { current } = this.state;
    return (

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>试题管理</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            
              
              
                
                <Button type="primary" style={{marginLeft:20}} onClick={this.showModal}>
                  <DiffOutlined />新建考试<Link to="/testcenter_tea/testpaperResult"></Link>
                  </Button>
                <Modal
                  title="考试信息" visible={this.state.visible}
                  onOk={this.hideModal} onCancel={this.hideModal}
                  footer={null}
                >
                  <Form style={{margin: '0 20% 0 20%'}} onFinish={this.exam_create}>
                    <Form.Item label="试卷编号" style={{margin: '0', width:'100%'}} name="paper_id">
                      <Input placeholder="请输入试卷编号"></Input>
                    </Form.Item><br></br>
                    <Form.Item label="课程编号" style={{margin: '0', width:'100%'}} name="course_id">
                      <Input placeholder="请输入课程编号"></Input>
                    </Form.Item><br></br>
                    <Form.Item label="教师编号" style={{margin: '0', width:'100%'}} name="teacher_id">
                      <Input placeholder="请输入教师编号"></Input>
                    </Form.Item><br></br>
                    <Form.Item label="考试日期" style={{margin: '0', width:'150%'}} name="exam_date">
                      <DatePicker placeholder="请选择考试日期"></DatePicker>
                    </Form.Item><br></br>
                    <Form.Item label="考试时段" style={{margin: '0', width:'100%'}} name="exam_time_range">
                      <TimePicker.RangePicker placeholder="请选择考试时段"></TimePicker.RangePicker>
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" type='primary' style={{margin: '10% 35% 0 35%'}}>确定</Button>
                    </Form.Item>
                  </Form>
                </Modal>
            
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>

            <Table columns={this.state.columns} dataSource={datasource}/>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
  }


}
export default asd;
