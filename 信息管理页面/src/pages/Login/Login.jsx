import React, { Component } from 'react'
import { Form, Input, Button, Radio } from 'antd'

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-content-wrap">
                    <div className="login-content">
                        <img className="logo" src="resources/logo.png" />

                        <div className="login-from">

                            <Form.Item>
                                <Input placeholder="用户名" />
                            </Form.Item>

                            <Form.Item>
                                <Input type="password" placeholder="密码" />
                            </Form.Item>
                            <Form.Item>
                                您是：
                                <Choose></Choose>
                            </Form.Item>
                            <Form.Item>
                                <Button className="login-form-button" type="primary" shape="round" size='large'>
                                    登录
                                </Button>

                            </Form.Item>

                            <Form.Item>
                                <Button className="login-form-button" type="primary" shape="round" size='large'>
                                    忘记密码
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const Choose = () => {
    const [value, setValue] = React.useState(1);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>学生</Radio>
        <Radio value={2}>教师</Radio>
        <Radio value={3}>管理员</Radio>
      </Radio.Group>
    );
  };