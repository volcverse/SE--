import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import {
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
  CloudOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import ManagerInfo from './ManagerInfo'
import AddUser from './AddUser'
import DeleteUser from './DeleteUser'
import ChangeUser from './ChangeUser'
import Application from './Application'
import AdmChangePSW from './AdmChangePSW'
import FindUser from './FindUser'
import ChangeAdmInfo from './ChangeAdmInfo'
import FindCourse from './FindCourse'
import ApplicationDetail from './ApplicationDetail'
import SystemManagement from './SystemManagement'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class ManagerCenter extends React.Component {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['m1']}>
            <Menu.Item key="m1" icon={<UserOutlined />}>
              个人中心
              <Link to="/ManagerCenter/ManagerInfo"></Link>
            </Menu.Item>
            <SubMenu key="userinfo" icon={<TeamOutlined />} title="用户操作">
              <Menu.Item key="1">新增用户
              <Link to="/ManagerCenter/AddUser"></Link>
              </Menu.Item>
              <Menu.Item key="2">删除用户
              <Link to="/ManagerCenter/DeleteUser"></Link>
              </Menu.Item>
              <Menu.Item key="3">修改用户
              <Link to="/ManagerCenter/ChangeUser"></Link>
              </Menu.Item>
              <Menu.Item key="4">查找用户
              <Link to="/ManagerCenter/FindUser"></Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="m4" icon={<FileTextOutlined />}>
              申请处理
              <Link to="/ManagerCenter/Application"></Link>
			  </Menu.Item>
            <Menu.Item key="m5" icon={<CloudOutlined />}>
              课程搜索
              <Link to="/ManagerCenter/FindCourse"></Link>
            </Menu.Item>
			<Menu.Item key="m6" icon={<SettingOutlined />}>
              系统管理
              <Link to="/ManagerCenter/SystemManagement"></Link>
            </Menu.Item>
          </Menu>
        </Sider>


        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>教务管理系统--管理员端</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Switch>
                <Route path="/ManagerCenter/ManagerInfo" component={ManagerInfo}></Route>
                <Route path="/ManagerCenter/AddUser" component={AddUser}></Route>
                <Route path="/ManagerCenter/DeleteUser" component={DeleteUser}></Route>
                <Route path="/ManagerCenter/ChangeUser" component={ChangeUser}></Route>
                <Route path="/ManagerCenter/FindUser" component={FindUser}></Route>
                <Route path="/ManagerCenter/Application" component={Application}></Route>
                <Route path="/ManagerCenter/ApplicationDetail" component={ApplicationDetail}></Route>
                <Route path="/ManagerCenter/AdmChangePSW" component={AdmChangePSW}></Route>
                <Route path="/ManagerCenter/ChangeAdmInfo" component={ChangeAdmInfo}></Route>
                <Route path="/ManagerCenter/FindCourse" component={FindCourse}></Route>
                <Route path="/ManagerCenter/SystemManagement" component={SystemManagement}></Route>
                <Redirect to="/ManagerCenter/ManagerInfo"></Redirect>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default ManagerCenter;

