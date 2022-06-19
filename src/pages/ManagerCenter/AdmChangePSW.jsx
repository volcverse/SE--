import React from 'react';
import { Input, Button, Form } from 'antd';
import axios from 'axios'

export default class AdmChangePSW extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: ""
    };
  }

  componentWillMount() {

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
      console.log(this.state.username);
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
                <span style={{ color: '#000', fontSize: '1.4em'}}>密码修改</span>
                <br /><br />
                <Form.Item label="旧密码" {...formItemLayout}>
                    <Input id="Moldpsw" type="password"></Input>
                </Form.Item>

                <Form.Item label="新密码" {...formItemLayout}>
                    <Input id="Mnewpsw" type="password"></Input>
                </Form.Item>

                <Form.Item label="确认密码" {...formItemLayout}>
                    <Input id="Mconfirm" type="password"></Input>
                </Form.Item>

                <Form.Item>
                    <Button onClick={requestSend} style={{ width: 200 }} type="primary" shape="round" size='large'>
                        确定
                    </Button>
                </Form.Item>
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

const requestSend=()=>{
    var Moldpsw=document.getElementById("Moldpsw");
    var Mnewpsw=document.getElementById("Mnewpsw");
    var Mconfirm=document.getElementById("Mconfirm");
    axios
    .post('https://localhost:8080', 
      transformFormData({
        oldpsw: Moldpsw.value,
        newpsw: Mnewpsw.value,
        confirmpsw: Mconfirm.value
      }),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }          
      }
    ).then((response) => { 
      // get response
    })
  }