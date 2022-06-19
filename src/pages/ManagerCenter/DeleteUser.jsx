import { Input, Button, Form } from 'antd';
import { Popconfirm, message } from 'antd';
import React from 'react';
import axios from 'axios';
import qs from 'qs';


export default class DeleteUser extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            psw: "",
            id: "",
            tp:""
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        var name = this.props.location.state.username;
        var passw = this.props.location.state.psw;

        console.log(name);
        this.setState({
            username: name,
            psw: passw,
        })
    }

    handleChange(event) {
        this.setState({
            id: event.target.value
        });
    }

    handleDelete() {
        const _this = this;
        axios
            .post('http://127.0.0.1:8000/api/deleteuser',
                qs.stringify({ id: _this.state.id }),
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            ).then((response) => {
                switch (response.data.code) {
                    case 200:
                        message.success('删除成功！');
                        break;
                    case 204:
                        message.error('删除失败，请检查该 id 是否存在！');
                }
                console.log(response.data);
            }).catch((error) => {
                message.error('删除失败，请检查该 id 是否存在！');
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
        console.log(this.state.username);
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Form.Item label="账号ID" {...formItemLayout}>
                    <Input id="delid" onChange={this.handleChange}></Input>
                </Form.Item>
                <br /><br /><br /><br />
                <Form.Item>
                    <Popconfirm
                        title="您确定要删除此账号吗"
                        onConfirm={this.handleDelete}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
                            删除
            </Button>
                    </Popconfirm>
                </Form.Item>
                <br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br />
            </div>
        )
    }
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}
/*
function confirm(e) {
    console.log(e);
    message.success('操作确认');
    requestSend();
}

const transformFormData = (obj) => {
    let formData = new FormData()

    for (let k in obj) {
        formData.append(k, obj[k])
    }

    return formData
}

const requestSend = () => {
    var s1 = document.getElementById("delid");


    axios
        .post('http://seim.com/api/delete',
            transformFormData({
                id: s1.value
            }),
            {
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }
        ).then((response) => {
            message.success('删除成功！');
        }).catch((error) => {
            message.error('删除失败，请检查该 id 是否存在！');
        })
}*/