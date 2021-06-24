import React, { Component } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import { Link } from 'react-router-dom'

export default class LoginInterface extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-content-wrap">
                    <div className="login-content">
                        <img className="logo" src="resources/logo.png" />

                        <div id="body" className="login-from">

                            <Form.Item>
                                <Input placeholder="用户名" />
                            </Form.Item>

                            <Form.Item>
                                <Input type="password" placeholder="密码" />
                            </Form.Item>


                            <Choose></Choose>

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
            <Radio name="choice" value={1}>学生</Radio>
            <Radio name="choice" value={2}>教师</Radio>
            <Radio name="choice" value={3}>管理员</Radio>
            {value === 1 ? <div><Form.Item><Link to="/StudentCenter">
                <br />
                <Button className="login-form-button" type="primary" shape="round" size='large'>
                    登录
                </Button></Link>
            </Form.Item>
                <Form.Item>
                    <Link to="/ForgetPSW">
                        <Button className="login-form-button" type="primary" shape="round" size='large'>
                            忘记密码
                        </Button>
                    </Link>
                </Form.Item>
            </div> : null}
            {value === 2 ? <div><Form.Item><Link to="/TeacherCenter">
                <br />
                <Button className="login-form-button" type="primary" shape="round" size='large'>
                    登录
                </Button></Link>
            </Form.Item>
                <Form.Item>
                    <Link to="/ForgetPSW">
                        <Button className="login-form-button" type="primary" shape="round" size='large'>
                            忘记密码
                        </Button>
                    </Link>
                </Form.Item>
            </div> : null}
            {value === 3 ? <div><Form.Item><Link to="/ManagerCenter">
                <br />
                <Button className="login-form-button" type="primary" shape="round" size='large'>
                    登录
                </Button></Link>
            </Form.Item>
                <Form.Item>
                    <Link to="/ForgetPSW">
                        <Button className="login-form-button" type="primary" shape="round" size='large'>
                            忘记密码
                        </Button>
                    </Link>
                </Form.Item>
            </div> : null}
        </Radio.Group>
    );
};