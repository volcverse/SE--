import { List, Avatar, Button } from 'antd';
import React from 'react';
import {
  FileTextOutlined,
} from '@ant-design/icons';


const data = [
  {
    title: '张三转专业申请',
  },
  {
    title: '李四退学申请',
  },
  {
    title: '王五微积分班级成绩修改申请',
  },
  {
    title: '赵四教师转系申请',
  },
];

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar style={{
                  backgroundColor: '#87d068',
                }} icon={<FileTextOutlined />} />}
                title={item.title}
                description="XXXXXXX"
              />
              <Button>详情</Button>
            </List.Item>
          )}
        />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
