import { Input, Button, Form } from 'antd';
import React from 'react';
import { Select, Table, message } from 'antd';
import axios from 'axios';
import qs from 'qs';
const { Option } = Select;


export default class ChangeUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            psw: "",
            type: '1',
            id: "",
            class: "",
            college: "",
            department: "",
            major: "",
            gender: "",
            id_card: "",
            contact: "",
            status: "",
            found: false,
            tp:""
        };
        this.sendRequest = this.sendRequest.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentWillMount() {
        var name = this.props.location.state.username;
        var passw = this.props.location.state.psw;
        var tp = this.props.location.state.type;
        console.log(name);
        this.setState({
            username: name,
            psw: passw,
            tp: tp
        })
    }

    sendRequest() {
        const _this = this;
        axios
            .post('http://127.0.0.1:8000/api/find',
                qs.stringify({
                    id: _this.state.id,
                    type: _this.state.type
                }),
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            ).then((response) => {

                if (qs.stringify(response.data)) {
                    _this.setState({
                        id: response.data.ID,
                        name: response.data.name,
                        gender: response.data.sex,
                        contact: response.data.contact,
                        id_card: response.data.IDCardNum,
                        found: true
                    })
                    if (_this.state.type == '1') {
                        _this.setState({
                            college: response.data.school,
                            major: response.data.major,
                            class: response.data.class,
                            status: response.data.state
                        })
                    }
                    else {
                        _this.setState({
                            department: response.data.department,
                        })
                    }
                    message.info(`找到用户 ${this.state.id}！`);
                }
                else {
                    message.info(`未找到该用户！`);
                    _this.setState({
                        username: "",
                        psw: "",
                        class: "",
                        college: "",
                        department: "",
                        major: "",
                        gender: "",
                        id_card: "",
                        contact: "",
                        status: "",
                        found: false
                    });
                }
                console.log(_this.state);
                console.log(response.data);
            }).catch((error) => {
                message.error(`查询失败，请稍后再试！`);
                _this.setState({
                    username: "",
                    psw: "",
                    class: "",
                    college: "",
                    department: "",
                    major: "",
                    gender: "",
                    id_card: "",
                    contact: "",
                    status: "",
                    found: false
                });
            })
    }

    changeType(value) {
        this.setState({
            type: value,
            found: false
        });
        console.log(`selected ${value}`);
    }

    changeState(event) {
        this.setState({ id: event.target.value });
        console.log(this.state.id);
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
        const columns = [
            {
                title: '信息',
                dataIndex: 'key',
                key: 'key'
            },
            {
                title: '内容',
                dataIndex: 'val',
                key: 'val'
            }
        ];
        console.log(this.state.username);
        if (!this.state.found) {
            return (
                <>
                    <br /><br /><br /><br /><br />
                    <Form.Item label="目标账号" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="目标账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
                    </Form.Item>
                    <br />
                    <Button onClick={this.sendRequest} style={{ width: 200 }} type="primary" shape="round" size='large'>
                        查找用户信息
                  </Button>
                    <br />


                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br />

                </>
            )
        }
        else if (this.state.type == '1') {
            var dataSource = [
                {
                    key: '姓名',
                    val: this.state.name
                },
                {
                    key: '性别',
                    val: this.state.gender == 'm' ? '男' : '女'
                },
                {
                    key: '学号',
                    val: this.state.id
                },
                {
                    key: '状态',
                    val: this.state.status
                },
                {
                    key: '学院',
                    val: this.state.college
                },
                {
                    key: '专业',
                    val: this.state.major
                },
                {
                    key: '班级',
                    val: this.state.class
                },
                {
                    key: '身份证号',
                    val: this.state.id_card
                },
                {
                    key: '联系方式',
                    val: this.state.contact
                }
            ];
            console.log(dataSource);
            return (
                <>
                    <br /><br /><br /><br /><br />
                    <Form.Item label="目标账号" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="目标账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
                    </Form.Item>
                    <br />
                    <Button onClick={this.sendRequest} style={{ width: 200 }} type="primary" shape="round" size='large'>
                        查找用户信息
                    </Button>
                    <br /><br />

                    <Table dataSource={dataSource} columns={columns} />

                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br />

                </>
            )
        }
        else {
            var dataSource = [
                {
                    key: '姓名',
                    val: this.state.name
                },
                {
                    key: '性别',
                    val: this.state.gender == '0' ? '男' : '女'
                },
                {
                    key: '工号',
                    val: this.state.id
                },
                {
                    key: '单位',
                    val: this.state.department
                },
                {
                    key: '身份证号',
                    val: this.state.id_card
                },
                {
                    key: '联系方式',
                    val: this.state.contact
                }
            ];
            console.log(dataSource);
            return (
                <>
                    <br /><br /><br /><br /><br />
                    <Form.Item label="目标账号" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="目标账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
                    </Form.Item>
                    <br />
                    <Button onClick={this.sendRequest} style={{ width: 200 }} type="primary" shape="round" size='large'>
                        查找用户信息
                  </Button>
                    <br /><br />

                    <Table dataSource={dataSource} columns={columns} />

                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br />

                </>
            )
        }
    }
}

/*
var utype = "student";

function handleChange(value) {
    utype = value;
}


const requestSendGet = () => {
    var content = document.getElementById("findid");
    const params = {
        id: content.value,
        type: utype
    }

    axios
        .get('https://localhost:8080',
            { params },
            {
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }
        ).then((response) => {

        })
}*/