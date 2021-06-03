import { Layout, Menu} from 'antd';
import React from 'react';
import { Link, Route } from 'react-router-dom'
import {
  TeamOutlined,
  UserOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

import ManagerInfo from './ManagerInfo'
import AddUser from './AddUser'
import DeleteUser from './DeleteUser'
import ChangeUser from './ChangeUser'
import Application from './Application'


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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="m1" icon={<UserOutlined />}>
              个人中心
              <Link to="/ManagerInfo"></Link>
            </Menu.Item>
            <SubMenu key="userinfo" icon={<TeamOutlined />} title="用户操作">
              <Menu.Item key="1">新增用户
              <Link to="/AddUser"></Link>
              </Menu.Item>
              <Menu.Item key="2">删除用户
              <Link to="/DeleteUser"></Link>
              </Menu.Item>
              <Menu.Item key="3">修改用户
              <Link to="/ChangeUser"></Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="m4" icon={<FileTextOutlined />}>
              申请处理
              <Link to="/Application"></Link>
          </Menu.Item>

          </Menu>
        </Sider>


        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>教务管理系统--管理员端</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Route path="/ManagerInfo" component={ManagerInfo}></Route>
              <Route path="/AddUser" component={AddUser}></Route>
              <Route path="/DeleteUser" component={DeleteUser}></Route>
              <Route path="/ChangeUser" component={ChangeUser}></Route>
              <Route path="/Application" component={Application}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default ManagerCenter;
