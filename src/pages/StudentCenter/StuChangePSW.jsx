import React from 'react';
import { Input, Button, Form } from 'antd';
import axios from 'axios'

var _THIS;

export default class StuChangePSW extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: ""
    };
  }

  componentWillMount() {
    _THIS = this;
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
      <div>
        <br /><br /><br /><br /><br />
        <span style={{ color: '#000', fontSize: '1.4em' }}>密码修改</span>
        <br /><br />
        <Form>
          <Form.Item name='op' rules={
            [
              { required: true, message: '请输入密码！' },
              { pattern: /^[A-Za-z0-p]{6,15}$/, message: "密码由数字和字母组成，长度为6-15个字符" }
            ]
          } label="旧密码" {...formItemLayout}>
            <Input id="Soldpsw" type="password"></Input>
          </Form.Item>

          <Form.Item name='np' rules={
            [
              { required: true, message: '请输入密码！' },
              { pattern: /^[A-Za-z0-p]{6,15}$/, message: "密码由数字和字母组成，长度为6-15个字符" }
            ]
          } label="新密码" {...formItemLayout}>
            <Input id="Snewpsw" type="password"></Input>
          </Form.Item>

          <Form.Item name='cp' rules={
            [
              { required: true, message: '请输入密码！' },
              { pattern: /^[A-Za-z0-p]{6,15}$/, message: "密码由数字和字母组成，长度为6-15个字符" }
            ]
          } label="确认密码" {...formItemLayout}>
            <Input id="Sconfirm" type="password"></Input>
          </Form.Item>

          <Form.Item>
            <Button onClick={requestSend} style={{ width: 200 }} type="primary" shape="round" size='large'>
              确定
                    </Button>
          </Form.Item>
        </Form>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}

const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
    formData.append(k, obj[k])
  }

  return formData
}

const requestSend = () => {
  var a = document.getElementById("Soldpsw");
  var b = document.getElementById("Snewpsw");
  var c = document.getElementById("Sconfirm");
  var d = _THIS.state.username;

  axios
    .post('http://127.0.0.1:8000/api/updatepsw',
      transformFormData({
        ID: d,
        oldpsw: a.value,
        newpsw: b.value,
        confirmpsw: c.value
      }),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      }
    ).then((response) => {
      var code = response.data.code;

      if (code === 200) {
        alert('修改成功！');
      }
      else {
        alert('两次密码不匹配！');
      }
    }).catch(function (error) {
      alert('旧密码有误或两次新密码输入不同！');
    })
}