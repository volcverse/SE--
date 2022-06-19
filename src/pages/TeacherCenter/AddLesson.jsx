import { Input, Button, Form, message } from 'antd';
import React from 'react';
import { Select } from 'antd';
import axios from 'axios'

const { Option } = Select;
const { TextArea } = Input;

var _THIS;
export default class AddLesson extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: ""
    };
  }

  componentWillMount() {
    _THIS=this;
    var name = this.props.location.state.username;
    var passw = this.props.location.state.psw;
    var tp = this.props.location.state.type;
    this.setState({
      username: name,
      psw: passw,
      type: tp
    })
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };

    return (

      <>
      <br/><br/><br/>
      <span style={{ color: '#000', fontSize: '1.9em' }}>新 开 课 程</span>
      <br/><br/>
        <Form.Item {...formItemLayout} label="课程类型">
          <Select defaultValue="T" onChange={coursetypeget}>
            <Option value="T">通识</Option>
            <Option value="M">专业</Option>
            <Option value="P">体育</Option>
          </Select>
        </Form.Item>
        <Form.Item label="课程号" {...formItemLayout}>
          <Input id="cid"></Input>
        </Form.Item>

        <Form.Item label="课程名" {...formItemLayout}>
          <Input id="cname"></Input>
        </Form.Item>

        <Form.Item {...formItemLayout} label="学分">
          <Select defaultValue="1" onChange={creditget}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>

        <Form.Item {...formItemLayout} label="每周课次">
          <Select defaultValue="2" onChange={timeget}>
            <Option value="2">2</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>

        <Form.Item label="课程容量" {...formItemLayout}>
          <Input id="cstock"></Input>
        </Form.Item>

        <Form.Item label="课程描述" {...formItemLayout}>
          <TextArea id="description" showCount maxLength={500} autoSize={{ minRows: 6, maxRows: 6 }}></TextArea>
        </Form.Item>


        <Form.Item>
          <Button onClick={requestSend} style={{ width: 200 }} type="primary" shape="round" size='large'>
            添加
          </Button>
        </Form.Item>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
    )
  }
}

var ctype = "T";
var credit = 1;
var time = 2;

function coursetypeget(value) {
  console.log(`selected ${value}`);
  ctype=value;
}

function creditget(value) {
  console.log(`selected ${value}`);
  credit=value;
}

function timeget(value) {
  time=value;
}

const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
    formData.append(k, obj[k])
  } 

  return formData
}

const requestSend=()=>{
  const c0=document.getElementById("cid");
  const c1=document.getElementById("cname");
  const c2=document.getElementById("cstock");
  const c3=document.getElementById("description");

  axios
  .post('http://127.0.0.1:8000/api/add', 
    transformFormData({
      ID:c0.value,
      name: c1.value,
      type: ctype,
      credit: credit,
      stock: c2.value,
      description: c3.value,
      teacher_ID:_THIS.state.username,
      time:time
    }),
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }          
    }
  ).then((response) => { 
    message.success('添加成功');
    // get response
  })
  .catch(function(error){
    message.error('添加失败');
  })
}