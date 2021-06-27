import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import StudentInfo from './StudentInfo'
import SApplication from './SApplication'
import MyApplication from './MyApplication'
import FindCourse from './FindCourse'
import ChangeStuInfo from './ChangeStuInfo'
import StuChangePSW from './StuChangePSW'
import Plan from './Plan'
import ChooseCourse from './ChooseCourse'
import StudentCourseInfo from './StudentCourseInfo'
import {
  BarChartOutlined,
  CloudOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HighlightOutlined,
  BookOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

        var status = true;
        var timer;
        document.body.onmousedown = function () {
                status = true;
           }
        document.body.onmouseup = function () {
            countTime();
        }

        function countTime() {

            setInterval(function() {
                if (!status) {
					status = true;
					
                    return window.location.href='http://localhost:3000/LoginInterface';
                    
                }
            }, 1);

            if(timer){
                clearInterval(timer);
            }

            timer = setInterval(function () {
                status = false;
            }, 120000);
        }
        countTime();


class StudentCenter extends React.Component {
  render() {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              个人中心
              <Link to="/StudentCenter/StudentInfo"></Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              课程资源
          </Menu.Item>
            <SubMenu key="lesson" icon={<FileTextOutlined />} title="选课中心">
              <Menu.Item key="l0">培养方案
              <Link to="/StudentCenter/Plan"></Link>
              </Menu.Item>
              <Menu.Item key="l1">课程选择
              <Link to="/StudentCenter/ChooseCourse"></Link>
              </Menu.Item>
			  <Menu.Item key="l2">结果查看
              <Link to="/StudentCenter/StudentCourseInfo"></Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<HighlightOutlined />}>
              在线测验
          </Menu.Item>
            <Menu.Item key="5" icon={<BarChartOutlined />}>
              成绩查询
          </Menu.Item>
            <Menu.Item key="6" icon={<BookOutlined />}>
              作业提交
          </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              相关申请
              <Link to="/StudentCenter/SApplication"></Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<CloudOutlined />}>
              课程搜索
              <Link to="/StudentCenter/FindCourse"></Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<SmileOutlined />}>
              个人资源
          </Menu.Item>

          </Menu>
        </Sider>


        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>教务管理系统--学生端</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Switch>
                <Route path="/StudentCenter/StudentInfo" component={StudentInfo}></Route>
                <Route path="/StudentCenter/SApplication" component={SApplication}></Route>
                <Route path="/StudentCenter/MyApplication" component={MyApplication}></Route>
                <Route path="/StudentCenter/FindCourse" component={FindCourse}></Route>
                <Route path="/StudentCenter/StuChangePSW" component={StuChangePSW}></Route>
                <Route path="/StudentCenter/ChangeStuInfo" component={ChangeStuInfo}></Route>
				<Route path="/StudentCenter/Plan" component={Plan}></Route>
                <Route path="/StudentCenter/ChooseCourse" component={ChooseCourse}></Route>
				<Route path="/StudentCenter/StudentCourseInfo" component={StudentCourseInfo}></Route>
                <Redirect to="/StudentCenter/StudentInfo"></Redirect>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default StudentCenter;
