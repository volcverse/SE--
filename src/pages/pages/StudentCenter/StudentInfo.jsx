import React, { Component } from 'react'
import { Descriptions, Button } from 'antd';
import { Image } from 'antd';
import { Link } from 'react-router-dom'


export default class StudentInfo extends Component {
  render() {
    return (
        <div>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <br /><br />
        <Link to="/StudentCenter/ChangeStuInfo">
          <Button>
            编辑信息
          </Button>
        </Link>

        <Link to="/StudentCenter/StuChangePSW">
          <Button style={{ marginLeft: 20 }}>
           修改密码
          </Button>
        </Link>

        <br /><br />
        <Descriptions title="学生信息">
            <Descriptions.Item label="姓名">张三</Descriptions.Item>
            <Descriptions.Item label="学号">319010xxxx</Descriptions.Item>
            <Descriptions.Item label="身份证号">123456789XXXXX</Descriptions.Item>
            <Descriptions.Item label="班级">软工1901</Descriptions.Item>
            <Descriptions.Item label="总学分">xx</Descriptions.Item>
            <Descriptions.Item label="GPA">5.0</Descriptions.Item>
        </Descriptions>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
  }
}
