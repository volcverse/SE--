import { Layout, Menu, Descriptions, Button } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { Image } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
  HighlightOutlined,
  BookOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

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
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              课程资源
          </Menu.Item>
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
          </Menu.Item>
            <Menu.Item key="8" icon={<SmileOutlined />}>
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
            
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <br /><br />
              <Button>
                编辑信息
            </Button>
            
            <Button style={{ marginLeft: 20 }}>
                修改密码
            </Button>
              <br /><br />
              <Descriptions title="教师信息">
                <Descriptions.Item label="姓名">李四</Descriptions.Item>
                <Descriptions.Item label="工号">Txxxxxxxx</Descriptions.Item>
                <Descriptions.Item label="身份证号">123456789XXXXX</Descriptions.Item>
                <Descriptions.Item label="系/部门">计算机</Descriptions.Item>
              </Descriptions>
              <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default TeacherCenter;
