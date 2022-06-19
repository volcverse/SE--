import { Layout, Menu, Descriptions,Card,Divider,Button} from 'antd';

import{DesktopOutlined,IdcardOutlined,EditOutlined,ReadOutlined,LeftOutlined,PlayCircleOutlined,BorderOutlined,OrderedListOutlined}from'@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Tag,Image } from 'antd';
import axios from 'axios';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HighlightOutlined,
  BookOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class introdu extends React.Component {
  state = {
    current:'mail',
  };
  constructor(props) {
    super(props);
    this.state = {
    tstart:false,
    state:'未开始',
    pid: this.props.location.state.pid,
    tid: this.props.location.state.username,
    current:'mail',
    examinfo:[{'start_time':0,'end_time':0,'state':'—— ——'}],
    score:0
    };
    axios
    .get('http://127.0.0.1:8000/examstateupdate',
      { 
        headers:{'content-type':'application/x-www-form-urlencoded'},

      }
    ).then((res)=>{

    })

    axios
    .get('http://127.0.0.1:8000/exam/query/'+this.state.pid,
          { 
            headers:{'content-type':'application/x-www-form-urlencoded'},
  
          }
        ).then((res)=>{
          console.log(res.data);
          if(res.data[0]['state']=='已开始'){
            this.setState({tstart:false});
          }
          this.setState({examinfo:res.data});
    })

  } 

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<LeftOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testexam",state:{username:this.state.tid}}}>
              返回题目列表
            </Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testintroduce1/",state:{pid:this.state.pid,username:this.state.tid}}}>
              考试概况
            </Link>
          </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testquestions1/",state:{pid:this.state.pid,username:this.state.tid}}}>
              题目列表
              </Link>
          </Menu.Item>
            <Menu.Item key="4" icon={<OrderedListOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testrank1/",state:{pid:this.state.pid,username:this.state.tid}}}>
              排名
              </Link>
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2em', marginLeft: 20 }}>试卷序号：{this.state.examinfo[0]['paper_id']}</div>
            
            <Divider />
            
            <Content>
                <div style={{ color:'black', fontSize: '1.4em', marginLeft: 20 }}>基本信息</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>开始时间：{this.state.examinfo[0]['start_time']}</div>
                <br></br>
                <div style={{ color:'black', fontSize: '1.0em', marginLeft: 20 }}>结束时间：{this.state.examinfo[0]['end_time']}</div>
                </Content>
                <br></br>
            <Card title={<div><div><Tag color="grey">{this.state.examinfo[0]['state']}</Tag></div></div>} style={{ marginRight: 40,marginLeft: 40 }}>
               <div style={{fontSize:'2.0em',textAlign:'center'}}>
                <Button type="primary" ghost disabled={this.state.tstart}>
                        <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testquestions1/",state:{pid:this.state.pid,username:this.state.tid}}}>查看题目列表</Link>
                </Button>
               </div>
              
            </Card>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        
      </Layout >
    )
  }


}
introdu.contextTypes = {router:()=> React.PropTypes.func.isRequired };
export default introdu;
