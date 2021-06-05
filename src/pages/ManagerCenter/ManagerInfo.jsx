import React, { Component } from 'react'
import { Descriptions, Button } from 'antd';
import { Image } from 'antd';
import AdmChangePSW from './AdmChangePSW'
import { Link, Route, BrowserRouter } from 'react-router-dom'

export default class ManagerInfo extends Component {
  render() {
    return (
      <BrowserRouter>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <br /><br />
        <Button>
          编辑信息
            </Button>
<Link to="/AdmChangePSW">
        <Button style={{ marginLeft: 20 }}>
          修改密码
          
            </Button></Link>
        <br /><br />
        <Descriptions title="管理员信息">
          <Descriptions.Item label="姓名">李四</Descriptions.Item>
          <Descriptions.Item label="工号">Txxxxxxxx</Descriptions.Item>
          <Descriptions.Item label="身份证号">123456789XXXXX</Descriptions.Item>
          <Descriptions.Item label="系/部门">计算机</Descriptions.Item>
        </Descriptions>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
<Route path="/AdmChangePSW" component={AdmChangePSW}></Route>
</BrowserRouter>
    )
  }
}
