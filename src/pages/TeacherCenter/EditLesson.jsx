import { Input, Button, Form, message } from 'antd';
import React from 'react';
import { Select } from 'antd';
import axios from 'axios'

const { Option } = Select;
const { TextArea } = Input;
var _THIS;
var ctime;

export default class EditLesson extends React.Component {
  constructor(){
    super();
    this.state={
        username:"",
        psw:"",
        course_ID:"",
        type:""
    };
  }

  componentWillMount(){
    var name=this.props.location.state.username;
    var passw=this.props.location.state.psw;
    var course_ID=this.props.location.state.course_ID;
    var tp=this.props.location.state.type;
    ctime=this.props.location.state.time;
    
    _THIS=this;

    console.log(this);
    this.setState({
      username:name,
      psw:passw,
      course_ID:course_ID,
      type:tp
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
      <br/>
      <span style={{ color: '#000', fontSize: '1.9em' }}>课 程 信 息 修 改</span>

      
      <br/><br/>
      <span style={{ color: '#555'}}>输入框留空表示不做修改</span>
      <br/><br/><br/>
        <Form.Item {...formItemLayout} label="课程类型">
          <Select defaultValue="" onChange={coursetypeget}>
            <Option value="">不做改动</Option>
            <Option value="T">通识</Option>
            <Option value="M">专业</Option>
            <Option value="P">体育</Option>
          </Select>
        </Form.Item>
        <Form.Item label="课程名" {...formItemLayout}>
          <Input id='cname'></Input>
        </Form.Item>

        <Form.Item {...formItemLayout} label="学分">
          <Select defaultValue="" onChange={creditget}>
           <Option value="">不做改动</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>

        <Form.Item label="课程容量" {...formItemLayout}>
          <Input id='cstock'></Input>
        </Form.Item>

        <Form.Item label="课程描述" {...formItemLayout}>
          <TextArea id='description' showCount maxLength={500} autoSize={{ minRows: 6, maxRows: 6 }}></TextArea>
        </Form.Item>


        <Form.Item>
          <Button style={{ width: 200 }} type="primary" shape="round" size='large' onClick={requestSend}>
            修改
          </Button>
        </Form.Item>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </>
    )
  }
}

var ctype = "";
var credit = "";

function coursetypeget(value) {
  console.log(`selected ${value}`);
  ctype=value;
}

function creditget(value) {
  console.log(`selected ${value}`);
  credit=value;
}

const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
    formData.append(k, obj[k])
  } 

  return formData
}

const requestSend=()=>{
  var c1=document.getElementById("cname");
  var c2=document.getElementById("cstock");
  var c3=document.getElementById("description");
  
  var id=_THIS.state.username;
  var cid=_THIS.state.course_ID;

  axios
  .post('http://127.0.0.1:8000/api/update', 
    transformFormData({
      ID:cid,
      name: c1.value,
      type: ctype,
      credit: credit,
      stock: c2.value,
      description: c3.value,
      teacher_ID:id,
      time:ctime
    }),
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }          
    }
  ).then((response) => { 
    // get response
    message.success('修改成功');
  })
  .catch(function(error){
    message.error('修改失败');
  })
}