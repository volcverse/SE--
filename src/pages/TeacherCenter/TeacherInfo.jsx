import React, { Component } from 'react'
import { Descriptions, Button } from 'antd';
import { Image } from 'antd';

export default class StudentInfo extends Component {
  render() {
    return (
        <div>
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
        <br /><br /><br />

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
  }
}
