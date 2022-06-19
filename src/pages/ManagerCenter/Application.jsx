import { List, Avatar, Button } from 'antd'
import React from 'react'
import {
  FileTextOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'


const data = [
  {
    title: '张三转专业申请',
  },
  {
    title: '李四退学申请',
  },
  {
    title: '赵四教师转系申请',
  },
];

export default class Application extends React.Component {
  constructor(){
    super();
    this.state={
        username:"",
        psw:""
    };
  }

  componentWillMount(){
    var name=this.props.location.state.username;
    var passw=this.props.location.state.psw;
    console.log(name);
    this.setState({
      username:name,
      psw:passw
    })
  }
  render() {
    console.log(this.state.username);
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
              <Link to={{pathname: '/ManagerCenter/ApplicationDetail',state:{username:this.state.username, psw:this.state.psw}}}>
                <Button>详情
                </Button>
              </Link>
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
