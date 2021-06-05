import { Layout, Menu, Descriptions, Button } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link,Route } from 'react-router-dom'
import TeacherInfo from './TeacherInfo'
import TApplication from './TApplication'
import MyApplication from './MyApplication'
import AddLesson from './AddLesson'
import EditLesson from './EditLesson'
import MyClass from './MyClass'
import FindCourse from './FindCourse'
import {
  AppstoreOutlined,
  BarChartOutlined,
  FileTextOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
  HighlightOutlined,
  BookOutlined,
  CloudOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class TeacherCenter extends React.Component {
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
              <Link to="/TeacherInfo"></Link>
          </Menu.Item>
          <SubMenu key="lesson" icon={<FileTextOutlined />} title="课程操作">
              <Menu.Item key="l0">我的课程
              <Link to="/MyClass"></Link>
              </Menu.Item>
              <Menu.Item key="l1">开课
              <Link to="/AddLesson"></Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<HighlightOutlined />}>
              在线测验
          </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              成绩查询
          </Menu.Item>
            <Menu.Item key="5" icon={<BookOutlined />}>
              作业发布
          </Menu.Item>
            <Menu.Item key="6" icon={<TeamOutlined />}>
              相关申请
              <Link to="./TApplication"></Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<CloudOutlined />}>
              课程搜索
              <Link to="/FindCourse"></Link>
          </Menu.Item>
            <Menu.Item key="9" icon={<SmileOutlined />}>
              个人资源
          </Menu.Item>

          </Menu>
        </Sider>


        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>教务管理系统--教师端</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Route path="/TeacherInfo" component={TeacherInfo}></Route>
              <Route path="/TApplication" component={TApplication}></Route>
              <Route path="/MyClass" component={MyClass}></Route>
              <Route path="/AddLesson" component={AddLesson}></Route>
              <Route path="/FindCourse" component={FindCourse}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default TeacherCenter;
