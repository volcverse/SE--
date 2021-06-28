import React, { Component } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'


var code;

export default class LoginInterface extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            psw: "",
            type: ""
        };
    }

    onFinish = (values) => {
        this.setState({
            type: usertype
        })
        /*
        if (this.state.type === 1) {
            this.props.history.push({ pathname: '/StudentCenter/StudentInfo', state: { username: name, psw: passw } });
        }
        else if (this.state.type === 2) {
            this.props.history.push({ pathname: '/TeacherCenter/TeacherInfo', state: { username: name, psw: passw } });
        }
        else if (this.state.type === 3) {
            this.props.history.push({ pathname: '/ManagerCenter/ManagerInfo', state: { username: name, psw: passw } });
        }*/
        const name = this.state.username;
        const passw = this.state.psw;
        const type = this.state.type;
        console.log(type);
        axios
            .post('http://127.0.0.1:8000/api/login',
                transformFormData({
                    ID: name,
                    PSW: passw,
                    type: type
                }),
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            ).then((response) => {
                // get response
                console.log(response);
                const tp = this.state.type;
                const name = this.state.username;

                code = response.data.code;
                if (code === 200) {
                    axios
                        .post('http://127.0.0.1:8000/api/systemlog',
                            transformFormData({
                                ID: name,
                                message: "登录成功",
                            }),
                            {
                                headers: { 'content-type': 'application/x-www-form-urlencoded' }
                            }
                        ).then((response) => {
                            // get response
                            console.log(response);
                        })
                
                if (this.state.type === 1) {
                    this.props.history.push({ pathname: '/StudentCenter/StudentInfo', state: { username: name, psw: passw, type:tp } });
                }
                else if (this.state.type === 2) {
                    this.props.history.push({ pathname: '/TeacherCenter/TeacherInfo', state: { username: name, psw: passw, type:tp } });
                }
                else if (this.state.type === 3) {
                    this.props.history.push({ pathname: '/ManagerCenter/ManagerInfo', state: { username: name, psw: passw, type:tp } });
                }
            }
                else {
                    alert('用户名或密码错误');
                }

            }).catch(function(error) {
        alert('用户名或密码错误');
    })

};

nameChange = (e) => {
    let value = e.target.value;
    this.setState({
        username: value
    })
}

pswChange = (e) => {
    let value = e.target.value;
    console.log(value);
    this.setState({
        psw: value
    })
}

render() {
    const { username } = this.state;
    const { psw } = this.state;
    return (
        <div className="login">
            <div className="login-content-wrap">
                <div className="login-content">
                    <img className="logo" src="resources/logo.png" />

                    <div id="body" className="login-from">
                        <Form
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}>
                            <Form.Item name="username" rules={
                                [
                                    { required: true, message: '请输入用户名！' }
                                ]
                            }>
                                <Input value={username} onChange={this.nameChange} placeholder="用户名" />
                            </Form.Item>

                            <Form.Item name="psw" rules={
                                [
                                    { required: true, message: '请输入密码！' },
                                    { pattern: /^[A-Za-z0-p]{6,15}$/, message: "密码由数字和字母组成，长度为6-15个字符" }
                                ]
                            }>
                                <Input value={psw} onChange={this.pswChange} type="password" placeholder="密码" />
                            </Form.Item>


                            <Choose></Choose>

                            <Form.Item>
                                <br />
                                <Button className="login-form-button" htmlType="submit" type="primary" shape="round" size='large'>
                                    登录
                                    </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/ForgetPSW">
                                    <Button className="login-form-button" type="primary" shape="round" size='large'>
                                        忘记密码
                                        </Button>
                                </Link>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

var usertype = 1;

const Choose = () => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        usertype = e.target.value;
        console.log(usertype);
        console.log('radio checked', e.target.value);
        setValue(e.target.value);

    };

    return (
        <Radio.Group onChange={onChange} value={value} style={{ marginLeft: 30 }}>
            <Radio name="choice" value={1} >学生</Radio>
            <Radio name="choice" value={2}>教师</Radio>
            <Radio name="choice" value={3}>管理员</Radio>
        </Radio.Group>
    );
};


const transformFormData = (obj) => {
    let formData = new FormData()

    for (let k in obj) {
        formData.append(k, obj[k])
    }

    return formData
}

