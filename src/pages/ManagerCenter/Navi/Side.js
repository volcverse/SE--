import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { Icon } from '@ant-design/compatible';
import SiderDemo from "./Navi";
import SiderDemo2 from "./Navi2";
import SiderDemo3 from "./Navi3";
const { Header, Content, Sider } = Layout;

class Side extends Component{

    render() {
        return(
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
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="1">
                            <Link to="/Side/Navi">
                                <Icon type="idcard" />
                                <span className="nav-text">添加、修改教室信息</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="2" >
                            <Link to="/Side/Navi2">
                                <Icon type="diff" />
                                <span className="nav-text">排课</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3" >
                            <Link to="/Side/Navi3">
                                <Icon type="eye" />
                                <span className="nav-text">查询课表</span>
                            </Link>
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
                                <Route path="/Side/Navi" component={SiderDemo}></Route>
                                <Route path="/Side/Navi2" component={SiderDemo2}></Route>
                                <Route path="/Side/Navi3" component={SiderDemo3}></Route>
                            </Switch>
                        </div>
                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default Side;